import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/domain/product/product';
import {ProductsService} from '../service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

  submit(event) {
    this.productsService.createProduct(event).subscribe(() => {
      this.getProducts();
    }, error => console.log(error));
  }

  delete(event) {
    const products = this.products.filter(product => product.id !== event.id);
    this.productsService.delete(event.id).subscribe(() => {
      this.products = products;
    }, error => console.log(error));
  }

  edit(event) {
    console.log(event);
  }
}
