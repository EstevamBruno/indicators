import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
