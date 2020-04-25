import {Component, Input, OnInit} from '@angular/core';
import {DateIndicator} from '../../../../shared/domain/date-indicator/date-indicator';
import {Cols} from '../../../../shared/domain/cols/cols';

@Component({
  selector: 'app-sale-register-table',
  templateUrl: './sale-register-table.component.html',
  styleUrls: ['./sale-register-table.component.scss']
})
export class SaleRegisterTableComponent implements OnInit {
  @Input() registerDateIndicatorSale: DateIndicator[] = [];
  colsDate: Cols[];

  constructor() {
  }

  ngOnInit() {
    this.loadColsDate();
  }

  private loadColsDate() {
    this.colsDate = [
      {field: '', header: 'Data', type: 'date', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Quantidade', type: 'number', headerStyle: '', contentStyle: ''},
    ];
  }
}
