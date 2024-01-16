import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminIndexComponent } from "./admin-index/admin-index.component";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ContentIndexComponent } from "./content/content-index/content-index.component";

@NgModule({
    declarations:[
        AdminIndexComponent,
        
        AdminNavbarComponent,
    ContentIndexComponent,

        
    ],
    imports:[BrowserModule,RouterModule,CommonModule],
    
})
export class AdminModule{}