import {Component, Input, OnInit} from '@angular/core';
import {Sale} from '../../../../shared/domain/sales/sale';
import {Cols} from '../../../../shared/domain/cols/cols';

@Component({
  selector: 'app-sale-register-date-table',
  templateUrl: './sale-register-date-table.component.html',
  styleUrls: ['./sale-register-date-table.component.scss']
})
export class SaleRegisterDateTableComponent implements OnInit {
  @Input() sales: Sale[] = [];
  colsDate: Cols[];

  constructor() {
  }

  ngOnInit() {
    this.loadColsDate();
  }

  private loadColsDate() {
    this.colsDate = [
      {field: '', header: 'Id', type: 'date', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Código do Produto', type: 'number', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Registro', type: 'number', headerStyle: '', contentStyle: ''},
    ];

  }
}
