import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-shop-index',
  templateUrl: './shop-index.component.html',
  styleUrls: ['./shop-index.component.css']
})
export class ShopIndexComponent implements OnInit {

  constructor(private appService:AppService) {
    this.appService.setHeaderMessage({
      title:"Our shop",
      message:"shop",
    })
   }

  ngOnInit(): void {
  }

}
