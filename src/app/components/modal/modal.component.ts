import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalType } from 'src/app/models/modal';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  //mostrarModal:boolean = true;
  @Input() modalTitle: string = 'Sin título';
  @Input() modalBody: string = 'Cuerpo del modal';
  @Input() modalTableData: {[key:string]:any} = {}; 
  @Input() modalType: ModalType = 'message';
  @Input() mostrarModal: boolean = true;
  @Input() modalImage:string = '';
  @Output() okButton = new EventEmitter<void>();
  @Output() cancelButton = new EventEmitter<void>();

  tableData:{[key:string]:any} = {
    "Campo 1": "Valor campo 1",
    "Campo 2": 0
  }
  constructor() { }

  ngOnInit(): void {
    if(this.modalType === 'table'){
      this.tableData = this.modalTableData;
    }
  }

  modalOkButton() {
    this.cancelButton.emit();
    if(this.modalType !== 'message'){
      this.okButton.emit();
    }
  }

  modalCancelButton() {
    this.cancelButton.emit();
  }

  getObjectKeys(obj:any):string[]{
    return Object.keys(obj);
  }

}
