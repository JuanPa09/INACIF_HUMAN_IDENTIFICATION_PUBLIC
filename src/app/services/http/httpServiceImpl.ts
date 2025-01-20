import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpService } from "./httpService";
import { map, firstValueFrom} from 'rxjs';
import { environment } from "src/environments/environment";

export class HttpServiceImpl implements HttpService {

  headers = {
    Authorization: '',
    "Content-Type": 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  API_BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async get(url: string): Promise<any> {
    const response = await this.http.get(`${this.API_BASE_URL}/${url}`, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body
        })
      );
    return firstValueFrom(response);
  }

  async put(url: string, body?: any): Promise<any> {
    try {
      const response = await this.http.put(`${this.API_BASE_URL}/${url}`, body, { headers: this.headers }).toPromise();
      return response;
    } catch (error) {
      const errorMessage = (error as HttpErrorResponse).message || 'Ha ocurrido un error en la solicitud.';
      throw new Error(errorMessage);
    }
  }

  async post(url: string, body?: any): Promise<any> {
    try {
      const response = await this.http.post(`${this.API_BASE_URL}/${url}`, body, { headers: this.headers }).toPromise();
      return response;
    } catch (error) {
      const errorMessage = (error as HttpErrorResponse).message || 'Ha ocurrido un error en la solicitud.';
      throw new Error(errorMessage);
    }
  }

  async delete(url: string): Promise<any> {

    const response = await this.http.delete(`${this.API_BASE_URL}/${url}`, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body
        })
      );
    return firstValueFrom(response);

  }

}