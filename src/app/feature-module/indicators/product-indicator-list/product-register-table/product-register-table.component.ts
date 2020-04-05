import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../shared/domain/product/product';
import {Cols} from '../../../../shared/domain/cols/cols';

@Component({
  selector: 'app-product-register-table',
  templateUrl: './product-register-table.component.html',
  styleUrls: ['./product-register-table.component.scss']
})
export class ProductRegisterTableComponent implements OnInit {
  @Input() productsByDate: Product[] = [];
  cols: Cols[];

  constructor() { }

  ngOnInit() {
    this.loadCols();
  }

  private loadCols() {
    this.cols = [
      {field: '', header: 'id', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Código', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Nome', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Registro', type: 'date', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Valor', type: 'currency', headerStyle: '', contentStyle: ''},
    ];
  }

}
