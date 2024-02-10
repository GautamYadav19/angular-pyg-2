import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CartAddedComponent } from './cart/cart-added/cart-added.component';
import { CartIndexComponent } from './cart/cart-index/cart-index.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutFormSummaryComponent } from './checkout/checkout-form-summary/checkout-form-summary.component';
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import { CheckoutIndexComponent } from './checkout/checkout-index/checkout-index.component';
import { ClientRoutingModule } from './client-routing.module';
import { ContactusFormComponent } from './contactus/contactus-form/contactus-form.component';
import { ContactusIndexComponent } from './contactus/contactus-index/contactus-index.component';
import { ContactusInfoComponent } from './contactus/contactus-info/contactus-info.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ProductCVDescComponent } from './product-details/product-complete-view/product-cv-desc/product-cv-desc.component';
import { ProductCVIndexComponent } from './product-details/product-complete-view/product-cv-index/product-cv-index.component';
import { ProductCVReviewComponent } from './product-details/product-complete-view/product-cv-review/product-cv-review.component';
import { ProductCVTableComponent } from './product-details/product-complete-view/product-cv-table/product-cv-table.component';
import { ProductDescComponent } from './product-details/product-desc/product-desc.component';
import { ProductDetailsIndexComponent } from './product-details/product-details-index/product-details-index.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { RegisterComponent } from './register/register.component';
import { FilterCheckboxComponent } from './shop/filter/filter-checkbox/filter-checkbox.component';
import { FilterDropdownsComponent } from './shop/filter/filter-dropdowns/filter-dropdowns.component';
import { FilterIndexComponent } from './shop/filter/filter-index/filter-index.component';
import { ShopIndexComponent } from './shop/shop-index/shop-index.component';
import { ShopMainComponent } from './shop/shop-main/shop-main.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AddToCartBtnComponent } from './utils/add-to-cart-btn/add-to-cart-btn.component';
import { DetailSilderComponent } from './utils/detail-silder/detail-silder.component';
import { PaginationComponent } from './utils/pagination/pagination.component';
import { SliderComponent } from './utils/slider/slider.component';
import { VendorComponent } from './vendor/vendor.component';
import { WishlistIndexComponent } from './wishlist/wishlist-index/wishlist-index.component';
import { ClientComponent } from './client.component';
import { AppService } from './services/app.service';



@NgModule({
  declarations: [   
    ClientComponent,
    HomeComponent,
    CategoriesComponent,
    FeaturedComponent,
    FooterComponent,
    NavbarComponent,
    OffersComponent,
    TopbarComponent,
    VendorComponent,
    SingleProductComponent,
    SubscribeComponent,
    ShopIndexComponent,
    FilterIndexComponent,
    FilterDropdownsComponent,
    FilterCheckboxComponent,
    ShopMainComponent,
    PaginationComponent,
    PageHeaderComponent,
    SliderComponent,
    DetailSilderComponent,
    ProductDetailsIndexComponent,
    ProductDescComponent,
    AddToCartBtnComponent,
    ProductCVIndexComponent,
    ProductCVDescComponent,
    ProductCVTableComponent,
    ProductCVReviewComponent,
    CheckoutIndexComponent,
    CheckoutFormComponent,
    CheckoutFormSummaryComponent,
    CartItemsComponent,
    CartSummaryComponent,
    CartAddedComponent,
    CartIndexComponent,
    ContactusIndexComponent,
    ContactusFormComponent,
    ContactusInfoComponent,
    WishlistIndexComponent,
    LoginComponent,
    RegisterComponent,  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ClientRoutingModule
  ],
  providers: [AppService],
  
})
export class ClientModule { }
