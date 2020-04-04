import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalesComponent} from './sales.component';
import {SalesService} from '../service/sales/sales.service';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule
  ],
  providers: [SalesService]
})
export class SalesModule { }
