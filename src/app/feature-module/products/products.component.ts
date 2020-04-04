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

  getProducts() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }
}
