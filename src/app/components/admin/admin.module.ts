import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ContentIndexComponent } from "./content/content-index/content-index.component";
import { AddProductComponent } from "./content/product/add-product/add-product.component";
import { PageShowComponent } from "./utils/page-show/page-show.component";
import { ThreeBtnSecComponent } from "./utils/three-btn-sec/three-btn-sec.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminPannelRoutingModule } from "./admin-routing.module";
import { AdminServiceService } from "./services/admin.service.service";
import { AdminComponent } from "./admin.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
    AdminComponent,
    ContentIndexComponent,
    AddProductComponent,
    PageShowComponent ,
    ThreeBtnSecComponent,

    ],
    imports:[BrowserModule,RouterModule,CommonModule,FormsModule, ReactiveFormsModule,AdminPannelRoutingModule,HttpClientModule],
    providers: [AdminServiceService],
    
})
export class AdminModule{}