import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductsService} from '../service/products/products.service';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent],
  imports: [
    CommonModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
