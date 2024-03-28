import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inacif-input-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  inputValue: any = '';
  @Input() placeHolder: string = 'Place holder is empty'

  constructor() { }

  ngOnInit(): void {
  }

}
