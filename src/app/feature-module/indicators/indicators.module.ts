import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndicatorsComponent} from './indicators.component';
import { ProductIndicatorListComponent } from './product-indicator-list/product-indicator-list.component';
import { SaleIndicatorListComponent } from './sale-indicator-list/sale-indicator-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterDateTableComponent } from './product-indicator-list/register-date-table/register-date-table.component';
import { ProductRegisterTableComponent } from './product-indicator-list/product-register-table/product-register-table.component';

@NgModule({
  declarations: [IndicatorsComponent, ProductIndicatorListComponent, SaleIndicatorListComponent, RegisterDateTableComponent, ProductRegisterTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class IndicatorsModule { }
