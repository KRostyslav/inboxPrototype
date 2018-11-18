import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashboxComponent } from './trashbox.component';

describe('TrashboxComponent', () => {
  let component: TrashboxComponent;
  let fixture: ComponentFixture<TrashboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
