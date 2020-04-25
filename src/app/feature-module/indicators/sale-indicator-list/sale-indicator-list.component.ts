import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Sale} from '../../../shared/domain/sales/sale';
import {DateIndicator} from '../../../shared/domain/date-indicator/date-indicator';

@Component({
  selector: 'app-sale-indicator-list',
  templateUrl: './sale-indicator-list.component.html',
  styleUrls: ['./sale-indicator-list.component.scss']
})
export class SaleIndicatorListComponent implements OnInit {
  @Output() generateIndicatorsEventEmitter = new EventEmitter();
  @Output() filterSaleByDateEventEmitter = new EventEmitter();
  @Input() registerDateIndicatorSale: DateIndicator[] = [];
  @Input() salesByDate: Sale[] = [];
  filterForm: FormGroup;

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.prepareFilterForm();
  }

  private prepareFilterForm() {
    this.filterForm = this.formBuild.group({
      date: [null, Validators.required]
    });
  }

  private generateIndicators() {
    this.generateIndicatorsEventEmitter.emit();
  }

  private filter() {
    const date = this.filterForm.value.date;
    this.filterSaleByDateEventEmitter.emit(date);
  }
}
