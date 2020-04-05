import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateIndicator} from '../../../shared/domain/date-indicator/date-indicator';
import {Product} from '../../../shared/domain/product/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-indicator-list',
  templateUrl: './product-indicator-list.component.html',
  styleUrls: ['./product-indicator-list.component.scss']
})
export class ProductIndicatorListComponent implements OnInit {
  @Output() generateIndicatorsEventEmitter = new EventEmitter();
  @Output() filterProductByDateEventEmitter = new EventEmitter();
  @Input() registerDateIndicatorProduct: DateIndicator[] = [];
  @Input() productsByDate: Product[] = [];
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.prepareFilterForm();
  }

  private prepareFilterForm() {
    this.filterForm = this.formBuilder.group({
      date: [null, Validators.required]
    });
  }

  private generateIndicators() {
    this.generateIndicatorsEventEmitter.emit();
  }

  private ordenateQuantity() {
    if (this.registerDateIndicatorProduct) {
      this.registerDateIndicatorProduct.sort((a, b) => b.quantity - a.quantity);
    }
  }

  private filter() {
    const filter = this.filterForm.getRawValue();
    this.filterProductByDateEventEmitter.emit(filter.date);
  }
}
