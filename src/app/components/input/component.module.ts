import { NgModule } from "@angular/core";
import { TextComponent } from "./text/text.component";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [TextComponent, ButtonComponent],
    exports: [TextComponent, ButtonComponent],
    imports: [
        FormsModule,
        CommonModule,
        InputTextModule,
        ButtonModule
    ],
})
export class TextComponentModule {}