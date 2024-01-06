import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopIndexComponent } from './components/shop/shop-index/shop-index.component';
import { ProductDetailsIndexComponent } from './components/product-details/product-details-index/product-details-index.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pyg/shop',component:ShopIndexComponent},
  {path:'pyg/details',component:ProductDetailsIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
