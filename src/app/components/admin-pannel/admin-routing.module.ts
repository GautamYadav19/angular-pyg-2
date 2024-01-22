import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AdminIndexComponent } from "./admin-index/admin-index.component";
import { AddProductComponent } from "./content/product/add-product/add-product.component";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";

const routes : Routes=[
{path:"admin",component:AdminNavbarComponent},
// {path:'user',component:HomeComponent,outlet:'userpannel'}

{path:'admin/add-product',component:AddProductComponent}
]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class AdminPannelRoutingModule{}