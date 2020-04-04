import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../../shared/domain/product/product';

const PRODUTOS = `${environment.JSON_SERVER}/produtos`;

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUTOS);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(PRODUTOS, product);
  }
}
