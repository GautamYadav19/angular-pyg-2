import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopIndexComponent } from './components/shop/shop-index/shop-index.component';
import { ProductDetailsIndexComponent } from './components/product-details/product-details-index/product-details-index.component';
import { CheckoutIndexComponent } from './components/checkout/checkout-index/checkout-index.component';
import { CartIndexComponent } from './components/cart/cart-index/cart-index.component';
import { ContactusIndexComponent } from './components/contactus/contactus-index/contactus-index.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pyg/shop',component:ShopIndexComponent},
  {path:'pyg/details',component:ProductDetailsIndexComponent},
  {path:'pyg/checkout',component:CheckoutIndexComponent},
  {path:'pyg/cart',component:CartIndexComponent},
  {path:"pyg/contactus",component:ContactusIndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
