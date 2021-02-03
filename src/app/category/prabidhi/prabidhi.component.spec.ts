import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabidhiComponent } from './prabidhi.component';

describe('PrabidhiComponent', () => {
  let component: PrabidhiComponent;
  let fixture: ComponentFixture<PrabidhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrabidhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrabidhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
