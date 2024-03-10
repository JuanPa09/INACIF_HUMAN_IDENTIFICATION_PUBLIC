import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RequestComponent } from './components/request/request.component';
import { EmailSuccessfulComponent } from './components/email-successful/email-successful.component';
import { EmailConfirmedComponent } from './components/email-confirmed/email-confirmed.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'solicitud',
        pathMatch: "full"
    },
    {
        path: 'solicitud',
        component: RequestComponent,
    },{
        path: 'email/successful',
        component: EmailSuccessfulComponent
    },{
        path: 'email/confirmed',
        component: EmailConfirmedComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: []
})
export class AppRoutingModule {}