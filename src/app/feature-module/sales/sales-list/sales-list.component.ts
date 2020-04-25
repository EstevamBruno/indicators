import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sale} from '../../../shared/domain/sales/sale';
import {Cols} from '../../../shared/domain/cols/cols';
import {Actions} from '../../../shared/domain/actions/actions';
import {isFunction} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  @Output() saleEventEmitter = new EventEmitter();
  @Input() sales: Sale[] = [];
  saleSelected: Sale;
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
      {field: '', header: 'Código do Produto', type: 'text', headerStyle: '', contentStyle: ''},
      {field: '', header: 'Data', type: 'date', headerStyle: '', contentStyle: ''},
    ];
  }

  private loadActions() {
    this.actions = [
      {label: 'Excluir', icon: 'fas fa-trash', command: () => this.remove()}
    ];
  }

  private remove() {
    this.saleEventEmitter.emit(this.saleSelected);
  }

  executeAction(action: Actions) {
    if (action.command && isFunction(action.command)) {
      action.command();
    }
  }

  selectRowWithButton(sale: Sale) {
    this.saleSelected = sale;
  }
}
