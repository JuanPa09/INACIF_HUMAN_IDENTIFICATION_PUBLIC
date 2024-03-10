import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading: boolean = false;
  constructor() { }

  startLoading(){
    //console.log("Cargando loader")
    this.isLoading = true;
  }

  stopLoading(pa?:string){
    //console.log("Parando loader desde: " + pa)
    this.isLoading = false;
  }

}
