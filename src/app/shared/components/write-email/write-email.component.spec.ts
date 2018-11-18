import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteEmailComponent } from './write-email.component';

describe('WriteEmailComponent', () => {
  let component: WriteEmailComponent;
  let fixture: ComponentFixture<WriteEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
