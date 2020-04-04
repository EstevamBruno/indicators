import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../shared/domain/product/product';
import {Cols} from '../../../shared/domain/cols/cols';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() productEventEmitter = new EventEmitter();
  cols: Cols[];

  constructor() {
  }

  ngOnInit() {
    this.loadCols();
  }

  loadCols() {
    this.cols = [
      {field: '', header: 'id', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Código', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Nome', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Registro', type: 'date', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Valor', type: 'currency', headerStyle: '', contentStyle: ''},
    ];
  }

}
