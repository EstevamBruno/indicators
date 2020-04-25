import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRegisterDateTableComponent } from './sale-register-date-table.component';

describe('SaleRegisterDateTableComponent', () => {
  let component: SaleRegisterDateTableComponent;
  let fixture: ComponentFixture<SaleRegisterDateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleRegisterDateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleRegisterDateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
