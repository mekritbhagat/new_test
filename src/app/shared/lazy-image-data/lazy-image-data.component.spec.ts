import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyImageDataComponent } from './lazy-image-data.component';

describe('LazyImageDataComponent', () => {
  let component: LazyImageDataComponent;
  let fixture: ComponentFixture<LazyImageDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyImageDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyImageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
