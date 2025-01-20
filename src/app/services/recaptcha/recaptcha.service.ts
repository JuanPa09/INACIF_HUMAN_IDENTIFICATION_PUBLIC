import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor() { }

  getToken(token: string): string {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', environment.apiUrl + "/recaptcha/" + token, false);
    xhr.send();
    return xhr.responseText;
  }
}
