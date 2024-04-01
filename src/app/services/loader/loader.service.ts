import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading: boolean = false;
  constructor() { }

  startLoading(){
    this.isLoading = true;
  }

  stopLoading(pa?:string){
    this.isLoading = false;
  }

}
