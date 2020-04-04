import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const VENDAS = `${environment.JSON_SERVER}/vendas`;

@Injectable()
export class SalesService {

  constructor(private http: HttpClient) { }
}
