import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../shared/domain/product/product';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit, OnChanges {
  @Output() productEventEmitter = new EventEmitter();
  @Output() productEditEventEmitter = new EventEmitter();
  @Input() product: Product;
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadProductForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product) {
      if (this.product) {
        this.prepareEdit();
      }
    }
  }

  private loadProductForm() {
    this.productForm = this.formBuilder.group({
      id: [null],
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      registerDate: [null, [Validators.required]],
      value: [null, [Validators.required]]
    });
  }

  private submit() {
    const product = this.productForm.getRawValue();
    this.productEventEmitter.emit(product);
    this.productForm.reset();
  }

  private prepareEdit() {
    this.productForm.patchValue({
      id: this.product.id,
      code: this.product.code,
      name: this.product.name,
      registerDate: this.product.registerDate,
      value: this.product.value
    });
  }

  private edit() {
    const product = this.productForm.getRawValue();
    this.productEditEventEmitter.emit(product);
    this.productForm.reset();
  }

  public handleSubmit() {
    if (!this.product) {
      this.submit();
    } else {
      this.edit();
    }
  }
}
