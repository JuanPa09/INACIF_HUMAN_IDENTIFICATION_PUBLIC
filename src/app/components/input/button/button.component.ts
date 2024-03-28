import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inacif-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text:string = 'No text'
  @Input() icon:string|undefined;
  @Input() class:string = ''
  @Input() disabled:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
