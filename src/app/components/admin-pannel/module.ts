import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminIndexComponent } from "./admin-index/admin-index.component";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ContentIndexComponent } from "./content/content-index/content-index.component";
import { AddProductComponent } from "./content/product/add-product/add-product.component";
import { PageShowComponent } from "./utils/page-show/page-show.component";
import { ThreeBtnSecComponent } from "./content/product/three-btn-sec/three-btn-sec.component";

@NgModule({
    declarations:[
    AdminIndexComponent,
    AdminNavbarComponent,
    ContentIndexComponent,
    AddProductComponent,
    PageShowComponent ,
    ThreeBtnSecComponent,

    ],
    imports:[BrowserModule,RouterModule,CommonModule],
    
})
export class AdminModule{}