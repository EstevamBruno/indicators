import {Component, Input, OnInit} from '@angular/core';
import {DateIndicator} from '../../../../shared/domain/date-indicator/date-indicator';
import {Cols} from '../../../../shared/domain/cols/cols';

@Component({
  selector: 'app-register-date-table',
  templateUrl: './register-date-table.component.html',
  styleUrls: ['./register-date-table.component.scss']
})
export class RegisterDateTableComponent implements OnInit {
  @Input() registerDateIndicatorProduct: DateIndicator[] = [];
  colsDate: Cols[];

  constructor() { }

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
