import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ShopIndexComponent } from './components/shop/shop-index/shop-index.component';
import { FilterIndexComponent } from './components/shop/filter/filter-index/filter-index.component';
import { FilterDropdownsComponent } from './components/shop/filter/filter-dropdowns/filter-dropdowns.component';
import { FilterCheckboxComponent } from './components/shop/filter/filter-checkbox/filter-checkbox.component';
import { ShopMainComponent } from './components/shop/shop-main/shop-main.component';
import { PaginationComponent } from './components/utils/pagination/pagination.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SliderComponent } from './components/utils/slider/slider.component';
import { DetailSilderComponent } from './components/utils/detail-silder/detail-silder.component';
import { ProductDetailsIndexComponent } from './components/product-details/product-details-index/product-details-index.component';
import { ProductDescComponent } from './components/product-details/product-desc/product-desc.component';
import { AddToCartBtnComponent } from './components/utils/add-to-cart-btn/add-to-cart-btn.component';
import { ProductCVIndexComponent } from './components/product-details/product-complete-view/product-cv-index/product-cv-index.component';
import { ProductCVDescComponent } from './components/product-details/product-complete-view/product-cv-desc/product-cv-desc.component';
import { ProductCVTableComponent } from './components/product-details/product-complete-view/product-cv-table/product-cv-table.component';
import { ProductCVReviewComponent } from './components/product-details/product-complete-view/product-cv-review/product-cv-review.component';
import { CheckoutIndexComponent } from './components/checkout/checkout-index/checkout-index.component';
import { CheckoutFormComponent } from './components/checkout/checkout-form/checkout-form.component';
import { CheckoutFormSummaryComponent } from './components/checkout/checkout-form-summary/checkout-form-summary.component';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { CartSummaryComponent } from './components/cart/cart-summary/cart-summary.component';
import { CartAddedComponent } from './components/cart/cart-added/cart-added.component';
import { CartIndexComponent } from './components/cart/cart-index/cart-index.component';
import { ContactusIndexComponent } from './components/contactus/contactus-index/contactus-index.component';
import { ContactusFormComponent } from './components/contactus/contactus-form/contactus-form.component';
import { ContactusInfoComponent } from './components/contactus/contactus-info/contactus-info.component';
import { WishlistIndexComponent } from './components/wishlist/wishlist-index/wishlist-index.component';

import { AdminPannelRoutingModule } from './components/admin-pannel/admin-routing.module';
import { AdminModule } from './components/admin-pannel/module';
import { ContentIndexComponent } from './components/admin-pannel/content/content-index/content-index.component';

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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AdminPannelRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
