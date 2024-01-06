import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.css']
})
export class CartIndexComponent implements OnInit {

  constructor(private appService:AppService) {
    this.appService.setHeaderMessage({
      title:"SHOPPING CART",
      message:"SHOPPING CART"
    })
   }

  ngOnInit(): void {
  }

}
