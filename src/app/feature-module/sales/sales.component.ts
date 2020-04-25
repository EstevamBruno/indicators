import {Component, OnInit} from '@angular/core';
import {Sale} from '../../shared/domain/sales/sale';
import {SalesService} from '../service/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private salesService: SalesService) {
  }

  ngOnInit() {
    this.getSales();
  }

  private getSales() {
    this.salesService.getSales().subscribe(sales => {
      this.sales = sales;
    }, error => console.log(error));
  }

  private submit(event) {
    this.salesService.createSale(event).subscribe(() => {
      alert('venda criada com sucesso');
      this.getSales();
    }, error => console.log(error));
  }

  private delete(event) {
    this.salesService.deleteSale(event.id).subscribe(() => {
      alert('venda excluída com sucesso');
      this.sales = this.sales.filter(sale => sale.id !== event.id);
    }, error => console.log(error));
  }
}
