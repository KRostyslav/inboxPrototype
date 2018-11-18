import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFullInfoComponent } from './email-full-info.component';

describe('EmailFullInfoComponent', () => {
  let component: EmailFullInfoComponent;
  let fixture: ComponentFixture<EmailFullInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailFullInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
