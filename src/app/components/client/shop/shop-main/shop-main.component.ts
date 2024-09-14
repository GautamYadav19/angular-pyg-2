import { Component, OnInit } from '@angular/core';
import ApiService from 'src/app/service/api.service';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {
productList!:any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getProductList()
  }
getProductList(){
  this.apiService.getEmpployee().subscribe((data)=>{
    this.productList=data
    console.log(this.productList);
    
  })
}
}
