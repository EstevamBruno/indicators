import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesIndicatorsComponent } from './sales-indicators.component';

describe('SalesIndicatorsComponent', () => {
  let component: SalesIndicatorsComponent;
  let fixture: ComponentFixture<SalesIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
