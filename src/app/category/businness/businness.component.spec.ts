import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinnessComponent } from './businness.component';

describe('BusinnessComponent', () => {
  let component: BusinnessComponent;
  let fixture: ComponentFixture<BusinnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
