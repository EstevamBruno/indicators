import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleIndicatorListComponent } from './sale-indicator-list.component';

describe('SaleIndicatorListComponent', () => {
  let component: SaleIndicatorListComponent;
  let fixture: ComponentFixture<SaleIndicatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleIndicatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleIndicatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
