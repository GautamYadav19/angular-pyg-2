import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartIndexComponent } from "./cart/cart-index/cart-index.component";
import { CheckoutIndexComponent } from "./checkout/checkout-index/checkout-index.component";
import { ClientComponent } from "./client.component";
import { ContactusIndexComponent } from "./contactus/contactus-index/contactus-index.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsIndexComponent } from "./product-details/product-details-index/product-details-index.component";
import { ShopIndexComponent } from "./shop/shop-index/shop-index.component";
import { WishlistIndexComponent } from "./wishlist/wishlist-index/wishlist-index.component";



const routes: Routes = [
  {path:'',component:ClientComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'pyg/shop',component:ShopIndexComponent},
  {path:'pyg/details',component:ProductDetailsIndexComponent},
  {path:'pyg/checkout',component:CheckoutIndexComponent},
  {path:'pyg/cart',component:CartIndexComponent},
  {path:"pyg/contactus",component:ContactusIndexComponent},
  {path:'pyg/wishlist',component:WishlistIndexComponent}
]
},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
