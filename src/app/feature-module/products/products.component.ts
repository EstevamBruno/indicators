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
      console.log('produto cadastrado com sucesso');
    }, error => console.log(error));
  }

  delete(event) {
    console.log(event);
    this.productsService.delete(event.id).subscribe(() => {
      alert('ok');
    }, error => console.log(error));
  }

  edit(event) {
    console.log(event);
  }
}
