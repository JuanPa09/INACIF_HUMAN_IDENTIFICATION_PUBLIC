import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/config/api-config';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor() { }

  getToken(token: string): string {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', API_BASE_URL + "/recaptcha/" + token, false);
    xhr.send();
    return xhr.responseText;
  }
}
