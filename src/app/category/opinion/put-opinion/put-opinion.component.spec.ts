import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutOpinionComponent } from './put-opinion.component';

describe('PutOpinionComponent', () => {
  let component: PutOpinionComponent;
  let fixture: ComponentFixture<PutOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
