import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StmarketComponent } from './stmarket.component';

describe('StmarketComponent', () => {
  let component: StmarketComponent;
  let fixture: ComponentFixture<StmarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StmarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
