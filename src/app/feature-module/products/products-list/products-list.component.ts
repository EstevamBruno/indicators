import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../shared/domain/product/product';
import {Cols} from '../../../shared/domain/cols/cols';
import {Actions} from '../../../shared/domain/actions/actions';
import {isFunction} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() productEditEventEmitter = new EventEmitter();
  @Output() productRemoveEventEmitter = new EventEmitter();
  productSelected: Product;
  cols: Cols[];
  actions: Actions[] = [];

  constructor() {
  }

  ngOnInit() {
    this.loadCols();
    this.loadActions();
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

  private loadActions() {
    this.actions = [
      {label: 'Editar', icon: 'fas fa-pencil-alt', command: () => this.edit()},
      {label: 'Excluir', icon: 'fas fa-trash', command: () => this.remove()}
    ];
  }

  edit() {
    this.productEditEventEmitter.emit(this.productSelected);
  }

  remove() {
    this.productRemoveEventEmitter.emit(this.productSelected);
  }

  executeAction(action: Actions) {
    if (action.command && isFunction(action.command)) {
      action.command();
    }
  }

  selectRowWithButton(product: Product) {
    this.productSelected = product;
  }

}
