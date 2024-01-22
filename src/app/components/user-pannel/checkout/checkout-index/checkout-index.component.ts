import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-checkout-index',
  templateUrl: './checkout-index.component.html',
  styleUrls: ['./checkout-index.component.css']
})
export class CheckoutIndexComponent implements OnInit {

  constructor(private appService:AppService) {
    this.appService.setHeaderMessage(
      {message:"CHECKOUT",
    title:"CHECKOUT"}
    )
   }

  ngOnInit(): void {
  }

}
