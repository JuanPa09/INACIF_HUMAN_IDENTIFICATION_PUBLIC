import { Injectable } from '@angular/core';
export declare type ModalType = "image" | "message" | "response" | "table"


@Injectable({
    providedIn: 'root'
  })
export class Modal {
    mostrarModal:boolean = false;
    modalTitle: string = '';
    modalBody: string = '';
    modalType: ModalType = 'message';
    okButton:()=> void = ()=> {};

    showModal(params: {title:string, body:string, type:ModalType, okButton?:any}){
        this.mostrarModal = true; 
        this.modalTitle = params.title;
        this.modalBody = params.body;
        this.modalType = params.type;
        this.okButton = params.okButton;
    }

    closeModal(){
        this.mostrarModal = false;
    }
}