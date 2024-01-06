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
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
