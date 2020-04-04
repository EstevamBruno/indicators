import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class?: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/produtos', title: 'produtos',  icon: 'files_box'},
    { path: '/cadastrar-vendas', title: 'Cadastrar Vendas',  icon: 'design_bullet-list-67'},
    { path: '/indicadores', title: 'Indicadores de Vendas',  icon: 'business_chart-bar-32'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
