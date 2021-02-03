import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELekhComponent } from './e-lekh.component';

describe('ELekhComponent', () => {
  let component: ELekhComponent;
  let fixture: ComponentFixture<ELekhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELekhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELekhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
