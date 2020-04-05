import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIndicatorListComponent } from './product-indicator-list.component';

describe('ProductIndicatorListComponent', () => {
  let component: ProductIndicatorListComponent;
  let fixture: ComponentFixture<ProductIndicatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIndicatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIndicatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
