import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerrComponent } from './pagerr.component';

describe('PagerrComponent', () => {
  let component: PagerrComponent;
  let fixture: ComponentFixture<PagerrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
