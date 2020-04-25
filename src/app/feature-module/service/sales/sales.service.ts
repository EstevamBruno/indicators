import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Sale} from '../../../shared/domain/sales/sale';
import {Observable} from 'rxjs';

const VENDAS = `${environment.JSON_SERVER}/vendas`;

@Injectable()
export class SalesService {

  constructor(private http: HttpClient) {
  }

  createSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(VENDAS, sale);
  }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(VENDAS);
  }

  deleteSale(saleId: Number): Observable<Sale[]> {
    return this.http.delete<Sale[]>(`${VENDAS}/${saleId}`);
  }
}
