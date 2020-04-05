import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsModule} from './products/products.module';
import {SalesModule} from './sales/sales.module';
import {IndicatorsModule} from './indicators/indicators.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SalesModule,
    ProductsModule,
    IndicatorsModule
  ]
})
export class FeatureModule { }
