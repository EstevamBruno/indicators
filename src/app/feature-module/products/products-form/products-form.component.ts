import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  @Output() productEventEmitter = new EventEmitter();
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadProductForm();
  }

  loadProductForm() {
    this.productForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      registerDate: [null, [Validators.required]],
      value: [null, [Validators.required]]
    });
  }

  submit() {
    const product = this.productForm.getRawValue();
    this.productEventEmitter.emit(product);
  }
}
