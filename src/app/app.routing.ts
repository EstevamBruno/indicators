import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SalesComponent} from './feature-module/sales/sales.component';
import {ProductsComponent} from './feature-module/products/products.component';
import {SalesIndicatorsComponent} from './feature-module/sales-indicators/sales-indicators.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  }, {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'produtos',
        component: ProductsComponent
      },
      {
        path: 'cadastrar-vendas',
        component: SalesComponent
      },
      {
        path: 'indicadores',
        component: SalesIndicatorsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
})
export class AppRoutingModule {
}
