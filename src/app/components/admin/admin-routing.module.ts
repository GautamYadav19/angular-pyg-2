import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./content/product/add-product/add-product.component";
import { AdminComponent } from "./admin.component";

const routes : Routes=[
{path:"admin",component:AdminComponent,
children:[
    {path:'',component:AddProductComponent}
    ]
},
]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class AdminPannelRoutingModule{}