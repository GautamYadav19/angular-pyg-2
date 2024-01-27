import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminPannelRoutingModule } from './components/admin-pannel/admin-routing.module';
import { AdminModule } from './components/admin-pannel/module';
import { CartAddedComponent } from './components/user-pannel/cart/cart-added/cart-added.component';
import { CartIndexComponent } from './components/user-pannel/cart/cart-index/cart-index.component';
import { CartItemsComponent } from './components/user-pannel/cart/cart-items/cart-items.component';
import { CartSummaryComponent } from './components/user-pannel/cart/cart-summary/cart-summary.component';
import { CategoriesComponent } from './components/user-pannel/categories/categories.component';
import { CheckoutFormSummaryComponent } from './components/user-pannel/checkout/checkout-form-summary/checkout-form-summary.component';
import { CheckoutFormComponent } from './components/user-pannel/checkout/checkout-form/checkout-form.component';
import { CheckoutIndexComponent } from './components/user-pannel/checkout/checkout-index/checkout-index.component';
import { ContactusFormComponent } from './components/user-pannel/contactus/contactus-form/contactus-form.component';
import { ContactusIndexComponent } from './components/user-pannel/contactus/contactus-index/contactus-index.component';
import { ContactusInfoComponent } from './components/user-pannel/contactus/contactus-info/contactus-info.component';
import { FeaturedComponent } from './components/user-pannel/featured/featured.component';
import { FooterComponent } from './components/user-pannel/footer/footer.component';
import { HomeComponent } from './components/user-pannel/home/home.component';
import { NavbarComponent } from './components/user-pannel/navbar/navbar.component';
import { OffersComponent } from './components/user-pannel/offers/offers.component';
import { PageHeaderComponent } from './components/user-pannel/page-header/page-header.component';
import { ProductCVDescComponent } from './components/user-pannel/product-details/product-complete-view/product-cv-desc/product-cv-desc.component';
import { ProductCVIndexComponent } from './components/user-pannel/product-details/product-complete-view/product-cv-index/product-cv-index.component';
import { ProductCVReviewComponent } from './components/user-pannel/product-details/product-complete-view/product-cv-review/product-cv-review.component';
import { ProductCVTableComponent } from './components/user-pannel/product-details/product-complete-view/product-cv-table/product-cv-table.component';
import { ProductDescComponent } from './components/user-pannel/product-details/product-desc/product-desc.component';
import { ProductDetailsIndexComponent } from './components/user-pannel/product-details/product-details-index/product-details-index.component';
import { SingleProductComponent } from './components/user-pannel/products/single-product/single-product.component';
import { FilterCheckboxComponent } from './components/user-pannel/shop/filter/filter-checkbox/filter-checkbox.component';
import { FilterDropdownsComponent } from './components/user-pannel/shop/filter/filter-dropdowns/filter-dropdowns.component';
import { FilterIndexComponent } from './components/user-pannel/shop/filter/filter-index/filter-index.component';
import { ShopIndexComponent } from './components/user-pannel/shop/shop-index/shop-index.component';
import { ShopMainComponent } from './components/user-pannel/shop/shop-main/shop-main.component';
import { SubscribeComponent } from './components/user-pannel/subscribe/subscribe.component';
import { TopbarComponent } from './components/user-pannel/topbar/topbar.component';
import { AddToCartBtnComponent } from './components/user-pannel/utils/add-to-cart-btn/add-to-cart-btn.component';
import { DetailSilderComponent } from './components/user-pannel/utils/detail-silder/detail-silder.component';
import { PaginationComponent } from './components/user-pannel/utils/pagination/pagination.component';
import { SliderComponent } from './components/user-pannel/utils/slider/slider.component';
import { VendorComponent } from './components/user-pannel/vendor/vendor.component';
import { WishlistIndexComponent } from './components/user-pannel/wishlist/wishlist-index/wishlist-index.component';
import { LoginComponent } from './components/user-pannel/login/login.component';
import { RegisterComponent } from './components/user-pannel/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
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
    RegisterComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    AdminPannelRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
