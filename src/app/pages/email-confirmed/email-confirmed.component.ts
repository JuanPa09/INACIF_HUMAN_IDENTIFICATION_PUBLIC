import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/httpService';
import { HttpServiceImpl } from 'src/app/services/http/httpServiceImpl';
import { LoaderService } from 'src/app/services/loader/loader.service';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.scss', '../../styles/emails/index.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: './'}]
})
export class EmailConfirmedComponent implements OnInit {

  httpService:HttpService;
  requestId:number = 0;

  homePage: string = "/solicitud"

  constructor(private httpClient: HttpClient, private loaderService:LoaderService, private route: ActivatedRoute) {
    this.httpService = new HttpServiceImpl(httpClient);
   }

   async ngOnInit(): Promise<void> {
    await this.route.queryParams.subscribe(async params => {
      const code = params['code'];
      if(!code){
        window.location.href = this.homePage;
      }
      try{
        this.loaderService.startLoading();
        const httpResponse = await this.httpService.put(`request/emailConfirmation?code=${code}`);
        this.requestId = httpResponse.data;
        if(this.requestId === null) {
          window.location.href = this.homePage;
        }
        this.loaderService.stopLoading();
      } catch (error) {
        alert("Error en api")
        window.location.href = this.homePage
      }
    });
  }

}
