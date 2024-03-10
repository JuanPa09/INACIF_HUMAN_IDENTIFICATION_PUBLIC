import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RequestComponent } from './components/request/request.component';
import { EmailSuccessfulComponent } from './components/email-successful/email-successful.component';
import { EmailConfirmedComponent } from './components/email-confirmed/email-confirmed.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponentModule } from './components/modal/component.module';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    EmailSuccessfulComponent,
    EmailConfirmedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalComponentModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Le47oYpAAAAAH0tS7MfGYYAPWmB7v6Ot4N5r1Kx" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
