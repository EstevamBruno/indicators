import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductsService} from '../service/products/products.service';
import { ProductsFormComponent } from './products-form/products-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
