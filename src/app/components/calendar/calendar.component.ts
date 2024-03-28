import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'inacif-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  showIcon = true;
  rangeDates: Date[] | undefined;
  selected!: Date;

  es = {
    firstDayOfWeek: 0,
    dayNames: [ "Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado" ],
    dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
    dayNamesMin: [ "Dom","Lun","Mar","Mie","Jue","Vie","Sáb" ],
    monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
    monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
  };

  @Input() placeHolder:string = 'Rango de fechas';
  @Input() maxDate = new Date('12/31/2099');
  @Output() onChange = new EventEmitter<any>();

  constructor(public primengConfig: PrimeNGConfig) {
   }

  ngOnInit(): void {
    this.primengConfig.setTranslation(this.es)
  }

  @ViewChild('calendar', {}) private calendar:any
  onSelect(){
    if (this.rangeDates) {
      if(this.rangeDates[1]){
        this.calendar.overlayVisible=false;
      }
    }
  }

  handleOnChange(value:any){
    const date = this.getCalendarDate(value);
    this.onChange.emit({date});
  }

  getCalendarDate(date: Date) {
    if(date){
      let day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
      let month = (date.getMonth() + 1).toString().length === 1 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1);
      let year = date.getFullYear();
      return `${year}-${month}-${day}`
    }
    
    return null;
    
  }

}
