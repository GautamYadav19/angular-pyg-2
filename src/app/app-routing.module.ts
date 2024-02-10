import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path:'',component:HomeComponent},
  // {path:'pyg/shop',component:ShopIndexComponent},
  // {path:'pyg/details',component:ProductDetailsIndexComponent},
  // {path:'pyg/checkout',component:CheckoutIndexComponent},
  // {path:'pyg/cart',component:CartIndexComponent},
  // {path:"pyg/contactus",component:ContactusIndexComponent},
  // {path:'pyg/wishlist',component:WishlistIndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
