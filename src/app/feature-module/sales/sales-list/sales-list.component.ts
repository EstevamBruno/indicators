import {Component, Input, OnInit} from '@angular/core';
import {Sale} from '../../../shared/domain/sales/sale';
import {Cols} from '../../../shared/domain/cols/cols';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  @Input() sales: Sale[] = [];
  cols: Cols[];

  constructor() {
  }

  ngOnInit() {
    this.loadCols();
  }

  private loadCols() {
    this.cols = [
      {field: '', header: 'id', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Código do Produto', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Data', type: 'date', headerStyle: '', contentStyle: ''},
    ];
  }

}
