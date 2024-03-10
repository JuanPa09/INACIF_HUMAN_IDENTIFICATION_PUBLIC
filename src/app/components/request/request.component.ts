import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalType } from 'src/app/models/modal';
import { HttpService } from 'src/app/services/http/httpService';
import { HttpServiceImpl } from 'src/app/services/http/httpServiceImpl';
import { LoaderService } from 'src/app/services/loader/loader.service';
import Ajv from 'ajv';
import { complexionTypes, departmentsNames, eyesColors, hairColors, identificationType, nationalities, sexTypes, skinColors } from 'src/app/utils/constants';
import { requestSchema } from 'src/app/schemas/request';
import { ERROR_MESSAGES } from 'src/app/models/httpModel';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { RecaptchaService } from '../../services/recaptcha/recaptcha.service';

declare interface Fields {
  fields: FieldsModel[]
}
declare interface FieldsModel {
  fieldId: string;
  fieldName: string;
  type: fieldType;
  size: fieldSize;
  options?: string[];
  from: fieldOwner;
  required: boolean;
  value?: any;
}
declare type fieldSize = "small" | "medium" | "expanded";
declare type fieldType = "radioButton" | "text" | "image" | "number" | "date" | "select";
declare type fieldOwner = "applicant" | "dissappeared";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private loaderService: LoaderService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private recaptchaService: RecaptchaService
  ) { 
    this.httpService = new HttpServiceImpl(httpClient);
  }

  classSmall = "col-4";
  classMedium = "col-8";
  classExpanded = "col-12";
  base64Image: string = '';
  httpService: HttpService;

  modalType: ModalType = "message";
  showModal: boolean = false;
  modalTitle: string = "";
  modalBody: string = "";

  showSuccessMessage: boolean = false;

  okButton: () => void = () => { };
  closeAction: () => void = () => { };

  ajv = new Ajv();

  requestFields: Fields = {
    fields: [{
      fieldId: 'applicantNationality',
      fieldName: "Nacionalidad",
      type: "radioButton",
      size: "expanded",
      options: nationalities,
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'applicantIdentificationType',
      fieldName: "Documento de identificación",
      type: "select",
      size: "small",
      options: identificationType,
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'applicantIdentificationNumber',
      fieldName: "No. Identificación",
      type: "text",
      size: "small",
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'applicantBirthdate',
      fieldName: "Fecha de nacimiento",
      type: "date",
      size: "small",
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'applicantNames',
      fieldName: "Nombres",
      type: "text",
      size: "small",
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'applicantLastNames',
      fieldName: "Apellidos",
      type: "text",
      size: "small",
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'applicantSex',
      fieldName: "Sexo",
      type: "select",
      size: "small",
      options: ["Hombre", "Mujer"],
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'applicantPhone',
      fieldName: "Teléfono",
      type: "number",
      size: "small",
      from: "applicant",
      required: true,
      value: 0
    }, {
      fieldId: 'applicantEmail',
      fieldName: "Correo",
      type: "text",
      size: "small",
      from: "applicant",
      required: true,
      value: ''
    }, {
      fieldId: 'disappearedFirstName',
      fieldName: "Primer Nombre",
      type: "text",
      size: "small",
      from: "dissappeared",
      required: true,
      value: ''
    }, {
      fieldId: 'disappearedSecondName',
      fieldName: "Segundo Nombre",
      type: "text",
      size: "small",
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedOtherNames',
      fieldName: "Otros Nombres",
      type: "text",
      size: "small",
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedLastName',
      fieldName: "Primer Apellido",
      type: "text",
      size: "small",
      from: "dissappeared",
      required: true,
      value: ''
    }, {
      fieldId: 'disappearedSecondLastName',
      fieldName: "Segundo Apellido",
      type: "text",
      size: "small",
      from: "dissappeared",
      required: true,
      value: ''
    }, {
      fieldId: 'disappearedBirthdate',
      fieldName: "Fecha de nacimiento",
      type: "date",
      size: "small",
      from: "dissappeared",
      required: true,
      value: ''
    }, {
      fieldId: 'disappearedHeight',
      fieldName: "Altura (cm)",
      type: "number",
      size: "small",
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedMunicipality',
      fieldName: "Municipio",
      type: "select",
      size: "small",
      options: departmentsNames,
      from: "dissappeared",
      required: true,
      value: ''
    }, {
      fieldId: 'disappearedComplexion',
      fieldName: "Complexión",
      type: "select",
      size: "small",
      options: complexionTypes,
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedEyesColor',
      fieldName: "Color ojos",
      type: "select",
      size: "small",
      options: eyesColors,
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedHairColor',
      fieldName: "Color Cabello",
      type: "select",
      size: "small",
      options: hairColors,
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedSkin',
      fieldName: "Color de piel",
      type: "select",
      size: "small",
      options: skinColors,
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedFeetSize',
      fieldName: "Talla Pie (cm)",
      type: "number",
      size: "small",
      from: "dissappeared",
      required: false,
      value: ''
    }, {
      fieldId: 'disappearedSex',
      fieldName: "Sexo",
      type: "select",
      size: "small",
      options: sexTypes,
      from: "dissappeared",
      required: true,
      value: ''
    }, {
      fieldId: 'image',
      fieldName: "Fotografía",
      type: "image",
      size: "small",
      from: "dissappeared",
      required: true,
      value: this.base64Image
    }, {
      fieldId: 'additionalDescription',
      fieldName: "Descripción adicional",
      type: "text",
      size: "expanded",
      from: "dissappeared",
      required: false,
      value: ''
    }]
  }

  requestBody: any = {};

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.base64Image = e.target?.result?.toString().split(",")[1] || "";
        };
        reader.readAsDataURL(file);
      } else {
        this.showModalType("Formato de archivo inválido", `El formato del archivo tiene que ser una imágen de la persona desaparecida`, undefined, undefined, "message");
        event.target.value = '';
      }
    }
  }

  getFieldClass(field: FieldsModel) {
    switch (field.size) {
      case "small":
        return this.classSmall;
      case "medium":
        return this.classMedium;
      case "expanded":
        return this.classExpanded;
    }
  }

  getFilteredFields(filterValue: fieldOwner) {
    return this.requestFields.fields.filter((fieldModel) => fieldModel.from === filterValue)
  }

  printRequestFields() {
    console.log(this.requestFields);
  }

  mapRequestBody(requestFields: Fields) {

    let request: any = {};
    for (let field of requestFields.fields) {
      if (field.fieldId === 'image') {
        request[field.fieldId] = this.base64Image;
        continue;
      }
      if (field.fieldId === 'applicantBirthdate') {
        if (!this.validateDate(field.value, 18)) {
          this.showModalType("Fecha del solicitante inválda", `El solicitante tiene que tener al menos 18 años`, undefined, undefined, "message");
          return;
        }
      }
      if (field.fieldId === 'disappearedBirthdate') {
        if (!this.validateDate(field.value, 6)) {
          this.showModalType("Fecha de nacimiento inválida de la persona desaparecida", `Verifique nuevamente la fecha de nacimiento de la persona desaparecida`, undefined, undefined, "message");
          return;
        }
      }
      if(field.fieldId === 'applicantEmail'){
        if(!this.emailValidator(field.value)){
          this.showModalType("Correo inválido", `Introduzca un correo válido para continuar`, undefined, undefined, "message");
          return;
        }
      }
      if (field.type === "number") {
        request[field.fieldId] = parseInt(field.value);
        continue;
      }
      request[field.fieldId] = field.value;
    }
    return request;
  }

  async createNewRequest() {
    const requestFields = this.mapRequestBody(this.requestFields);
    if (!requestFields) {
      return;
    }
    const validate = this.ajv.compile(requestSchema);
    const isValid = validate(requestFields);
    if (isValid) {
      try {
        this.loaderService.startLoading();
        await this.httpService.post("request", requestFields);
        this.showSuccessMessage = true;
        //this.showModalType("Solicitud creada correctamente", `La solicitud se ha creado con éxito`, undefined, undefined, "message");
      } catch (error) {
        this.showModalType(ERROR_MESSAGES.INTERNAL_ERROR.title, ERROR_MESSAGES.INTERNAL_ERROR.message, undefined, undefined, "message");
      } finally {
        this.loaderService.stopLoading()
      }
      //window.location.href = "/email/successful";
    } else {
      if (validate.errors) {
        const errors: string[] = [];
        for (const error of validate?.errors) {
          const field = this.requestFields.fields.find((field)=> field.fieldId === error.instancePath.replace("/", ""));
          errors.push(`\n • ${field?.fieldName}`);
          //errors.push(`\n${error.instancePath.replace("/", "")}: ${error?.message}`);
        }
        this.showModalType("Verificar campos", `Verifique los siguientes campos con problemas: ${errors.join()}`, undefined, this.cerrarModal, "message");
      }
    }
  }

  validateDate(fecha: string, minimumAge: number) {
    const fechaIngresada = new Date(fecha);
    if (isNaN(fechaIngresada.getTime())) {
      return false;
    }

    const fechaActual = new Date();
    const edadMinima = minimumAge;

    const fechaMinima = new Date();
    fechaMinima.setFullYear(fechaMinima.getFullYear() - edadMinima);

    return fechaIngresada < fechaActual && fechaIngresada <= fechaMinima;
  }

  emailValidator(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email) ? true : false;
  }

  showModalType(title: string, body: string, action?: any, closeAction: any = this.cerrarModal, type: ModalType = 'response') {
    this.showModal = true
    this.modalTitle = title;
    this.modalBody = body;
    this.modalType = type;
    if (action) {
      this.okButton = action;
    }
    if (closeAction) {
      this.closeAction = closeAction;
    }
  }

  cerrarModal(): void {
    this.showModal = !this.showModal;
  }

  reloadPage(){
    window.location.reload();
  }

  doRecaptchaValidation(){
    this.recaptchaV3Service.execute('')
      .subscribe((token) => {
        const auxiliar = this.recaptchaService.getToken(token)
        alert(auxiliar);
        if (  auxiliar.includes('true') ) {
          alert('Todo bien')
        }
      });
  }

}
