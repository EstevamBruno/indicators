import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndicatorsComponent} from './indicators.component';
import { ProductIndicatorListComponent } from './product-indicator-list/product-indicator-list.component';
import { SaleIndicatorListComponent } from './sale-indicator-list/sale-indicator-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterDateTableComponent } from './product-indicator-list/register-date-table/register-date-table.component';
import { ProductRegisterTableComponent } from './product-indicator-list/product-register-table/product-register-table.component';
import { SaleRegisterDateTableComponent } from './sale-indicator-list/sale-register-date-table/sale-register-date-table.component';
import { SaleRegisterTableComponent } from './sale-indicator-list/sale-register-table/sale-register-table.component';

@NgModule({
  declarations: [IndicatorsComponent, ProductIndicatorListComponent, SaleIndicatorListComponent, RegisterDateTableComponent, ProductRegisterTableComponent, SaleRegisterDateTableComponent, SaleRegisterTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class IndicatorsModule { }
