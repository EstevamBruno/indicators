import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

const PRODUTOS = `${environment.JSON_SERVER}/produtos`;

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }
}
