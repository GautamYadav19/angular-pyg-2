import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartIndexComponent } from './components/user-pannel/cart/cart-index/cart-index.component';
import { CheckoutIndexComponent } from './components/user-pannel/checkout/checkout-index/checkout-index.component';
import { ContactusIndexComponent } from './components/user-pannel/contactus/contactus-index/contactus-index.component';
import { HomeComponent } from './components/user-pannel/home/home.component';
import { ProductDetailsIndexComponent } from './components/user-pannel/product-details/product-details-index/product-details-index.component';
import { ShopIndexComponent } from './components/user-pannel/shop/shop-index/shop-index.component';
import { WishlistIndexComponent } from './components/user-pannel/wishlist/wishlist-index/wishlist-index.component';
import { RouteLayoutComponent } from './route-layout/route-layout.component';
import { AdminIndexComponent } from './components/admin-pannel/admin-index/admin-index.component';

const routes: Routes = [
  {path:'',component:HomeComponent}
//   {path:'',component:RouteLayoutComponent,
// children:[
  // {path:'admin',component:AdminIndexComponent},
  // {path:'user',component:HomeComponent,outlet:'userpannel'}
// ]}
,
  {path:'pyg/shop',component:ShopIndexComponent},
  {path:'pyg/details',component:ProductDetailsIndexComponent},
  {path:'pyg/checkout',component:CheckoutIndexComponent},
  {path:'pyg/cart',component:CartIndexComponent},
  {path:"pyg/contactus",component:ContactusIndexComponent},
  {path:'pyg/wishlist',component:WishlistIndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
