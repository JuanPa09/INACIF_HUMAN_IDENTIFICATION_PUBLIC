import { complexionTypes, departmentsNames, eyesColors, hairColors, identificationType, nationalities, sexTypes, skinColors } from "../utils/constants";

export const requestSchema = {
    type: 'object',
    properties: {
      applicantNationality: { type: 'string', enum: nationalities },
      applicantIdentificationType: { type: 'string', enum: identificationType },//
      applicantIdentificationNumber: { type: 'number', minLength: 7 },//
      applicantBirthdate: { type: 'string', minLength: 1  },///
      applicantNames: { type: 'string', minLength: 3 },//
      applicantLastNames: { type: 'string', minLength: 3 },
      applicantSex: { type: 'string', enum: sexTypes },
      applicantPhone: { type: 'number', minimum: 10000000 },
      applicantEmail: { type: 'string', minLength: 1 },///
      disappearedFirstName: { type: 'string', minLength: 2 },
      disappearedSecondName: { type: 'string' },
      disappearedOtherNames: { type: 'string' },
      disappearedLastName: { type: 'string', minLength: 2 },
      disappearedSecondLastName: { type: 'string'},
      disappearedBirthdate: { type: 'string', minLength: 1, },
      disappearedHeight: { type: 'number', minimum: 50, maximum: 230 },
      disappearedMunicipality: { type: 'string', enum: departmentsNames },
      disappearedComplexion: { type: 'string', enum: complexionTypes },
      disappearedEyesColor: { type: 'string', enum: eyesColors },
      disappearedHairColor: { type: 'string', enum: hairColors },
      disappearedSkin: { type: 'string', enum: skinColors },
      disappearedFeetSize: { type: 'number', minimum: 20, maximum: 50 },
      disappearedSex: { type: 'string', enum: sexTypes },
      image: { type: 'string', minLength: 1 },
      additionalDescription: { type: 'string'},///
    },
    required: [
        "applicantNationality",
        "applicantIdentificationType",
        "applicantIdentificationNumber",
        "applicantBirthdate",
        "applicantNames",
        "applicantSex",
        "applicantPhone",
        "applicantEmail",
        "disappearedFirstName",
        "disappearedSecondName",
        "disappearedOtherNames",
        "disappearedLastName",
        "disappearedSecondLastName",
        "disappearedBirthdate",
        "disappearedHeight",
        "disappearedMunicipality",
        "disappearedComplexion",
        "disappearedEyesColor",
        "disappearedHairColor",
        "disappearedSkin",
        "disappearedFeetSize",
        "disappearedSex",
        "image",
        "additionalDescription"
    ],
    additionalProperties: false,
  };