import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSuccessfulComponent } from './email-successful.component';

describe('EmailSuccessfulComponent', () => {
  let component: EmailSuccessfulComponent;
  let fixture: ComponentFixture<EmailSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
