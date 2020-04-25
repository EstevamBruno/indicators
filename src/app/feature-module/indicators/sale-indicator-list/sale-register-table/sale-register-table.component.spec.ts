import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRegisterTableComponent } from './sale-register-table.component';

describe('SaleRegisterTableComponent', () => {
  let component: SaleRegisterTableComponent;
  let fixture: ComponentFixture<SaleRegisterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleRegisterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleRegisterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
