import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.scss']
})
export class SalesFormComponent implements OnInit {
  @Output() saleEventEmitter = new EventEmitter();
  saleForm: FormGroup;
  validateField: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadSaleForm();
  }

  private loadSaleForm() {
    this.saleForm = this.formBuilder.group({
      id: [null],
      productCode: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }

  private submit() {
    this.validateField = true;
    if (this.validateField && this.saleForm.invalid) {
      return;
    }
    this.validateField = false;
    const sale = this.saleForm.getRawValue();
    this.saleEventEmitter.emit(sale);
    this.saleForm.reset();
  }
}
