import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RequestComponent } from './pages/request/request.component';
import { EmailSuccessfulComponent } from './pages/email-successful/email-successful.component';
import { EmailConfirmedComponent } from './pages/email-confirmed/email-confirmed.component';
import { AuthGuard } from './guards/auth.guard';

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
        component: EmailSuccessfulComponent,
        canActivate: [AuthGuard]
    },{
        path: 'email/confirmed',
        component: EmailConfirmedComponent
    },
    {
        path: '**',
        redirectTo: 'solicitud'
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