import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainComponent } from './entertain.component';

describe('EntertainComponent', () => {
  let component: EntertainComponent;
  let fixture: ComponentFixture<EntertainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
