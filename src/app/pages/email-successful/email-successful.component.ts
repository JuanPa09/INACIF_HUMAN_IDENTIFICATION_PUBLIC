import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-successful',
  templateUrl: './email-successful.component.html',
  styleUrls: ['./email-successful.component.scss', '../../styles/emails/index.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: './'}]
})
export class EmailSuccessfulComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
