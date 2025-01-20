import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RequestComponent } from './pages/request/request.component';
import { EmailSuccessfulComponent } from './pages/email-successful/email-successful.component';
import { EmailConfirmedComponent } from './pages/email-confirmed/email-confirmed.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponentModule } from './components/modal/component.module';
import {NgxCaptchaModule} from 'ngx-captcha'
import { TextComponentModule } from './components/input/component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponentModule } from './components/calendar/component.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    EmailSuccessfulComponent,
    EmailConfirmedComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalComponentModule,
    TextComponentModule,
    CalendarComponentModule,

    // V2
    NgxCaptchaModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
