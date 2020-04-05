import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/domain/product/product';
import {Sale} from '../../shared/domain/sales/sale';
import {SalesService} from '../service/sales/sales.service';
import {ProductsService} from '../service/products/products.service';

@Component({
  selector: 'app-sales-indicators',
  templateUrl: './sales-indicators.component.html',
  styleUrls: ['./sales-indicators.component.scss']
})
export class SalesIndicatorsComponent implements OnInit {
  sales: Sale[] = [];
  products: Product[] = [];

  constructor(private salesService: SalesService,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getSales();
    this.getProducts();
  }

  private getSales() {
    this.salesService.getSales().subscribe(sales => {
      console.log(sales);
      this.sales = sales;
    }, error => console.log(error));
  }

  private getProducts() {
    this.productsService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    }, error => console.log(error));
  }

}
