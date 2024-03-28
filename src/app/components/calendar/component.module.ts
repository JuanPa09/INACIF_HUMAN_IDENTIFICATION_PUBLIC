import { NgModule } from "@angular/core";
import { CalendarComponent } from "./calendar.component";
import { CalendarModule} from 'primeng/calendar';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [CalendarComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CalendarModule,
        CommonModule
    ],
    bootstrap: [CalendarComponent],
    exports: [
        CalendarComponent,
    ]
})
export class CalendarComponentModule {}