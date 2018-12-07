import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'transaction',loadChildren:'./components/transaction/consult/transaction.module#TransactionModule'
  },
  {
    path:'product',loadChildren:'./components/transaction/product/product.module#ProductModule'
  },
  {
    path:'rate',loadChildren:'./components/rate/rate.module#RateModule'
  },
  {
    path:'sku',loadChildren:'./components/transaction/sku/sku.module#SkuModule'
  },
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
