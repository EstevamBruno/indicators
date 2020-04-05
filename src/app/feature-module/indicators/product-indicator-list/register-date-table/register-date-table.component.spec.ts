import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDateTableComponent } from './register-date-table.component';

describe('RegisterDateTableComponent', () => {
  let component: RegisterDateTableComponent;
  let fixture: ComponentFixture<RegisterDateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
