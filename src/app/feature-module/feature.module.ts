import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsModule} from './products/products.module';
import {SalesModule} from './sales/sales.module';
import {SalesIndicatorsModule} from './sales-indicators/sales-indicators.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SalesModule,
    ProductsModule,
    SalesIndicatorsModule
  ]
})
export class FeatureModule { }
