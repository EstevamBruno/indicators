import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/domain/product/product';
import {Sale} from '../../shared/domain/sales/sale';
import {SalesService} from '../service/sales/sales.service';
import {ProductsService} from '../service/products/products.service';
import {DateIndicator} from '../../shared/domain/date-indicator/date-indicator';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  sales: Sale[] = [];
  products: Product[] = [];
  registerDateIndicatorProduct: DateIndicator[];
  registerDateIndicatorSale: DateIndicator[];
  productsByDate: Product[] = [];
  salesByDate: Sale[] = [];

  constructor(private salesService: SalesService,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getSales();
    this.getProducts();
  }

  private getSales() {
    this.salesService.getSales().subscribe(sales => {
      this.sales = sales;
    }, error => console.log(error));
  }

  private getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    }, error => console.log(error));
  }

  private indicatorProductByRegisterDate(products: Product[]) {
    this.registerDateIndicatorProduct = [];
    const productRegisterDateSet = new Set();
    products.map(product => productRegisterDateSet.add(product.registerDate));

    const productsList = [];
    productRegisterDateSet.forEach(dates => productsList.push(dates));

    this.registerDateIndicatorProduct = productsList.map((registerDate: Date) => {
      const data = {
        date: registerDate,
        quantity: 0
      };
      products.map(product => {
        if (registerDate === product.registerDate) {
          data.quantity++;
        }
      });
      return data as DateIndicator;
    });
  }

  private executeIndicatorProductByRegisterDate() {
    this.indicatorProductByRegisterDate(this.products);
  }

  private indicatorSaleByRegisterDate(sales: Sale[]) {
    this.registerDateIndicatorSale = [];
    const salesDateSet = new Set();
    sales.map(sale => salesDateSet.add(sale.date));

    const salesList = [];
    salesDateSet.forEach(date => salesList.push(date));

    this.registerDateIndicatorSale = salesList.map(date => {
      const data = {
        date: date,
        quantity: 0
      };
      sales.map(sale => {
        if (date === sale.date) {
          data.quantity++;
        }
      });
      return data as DateIndicator;
    });
    console.log(this.registerDateIndicatorSale);
  }

  prepareProductsByDate(date) {
    this.productsByDate = this.products.filter(product => product.registerDate === date);
  }

  prepareSalesByDate(date: Date) {
    this.salesByDate = this.sales.filter(sale => sale.date === date);
  }

}
