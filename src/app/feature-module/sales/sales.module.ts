import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalesComponent} from './sales.component';
import {SalesService} from '../service/sales/sales.service';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [SalesComponent, SalesListComponent, SalesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [SalesService]
})
export class SalesModule { }
