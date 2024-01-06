import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-product-details-index',
  templateUrl: './product-details-index.component.html',
  styleUrls: ['./product-details-index.component.css']
})
export class ProductDetailsIndexComponent implements OnInit {

  constructor(private appService:AppService) {
    this.appService.setHeaderMessage({
      title:"SHOP DETAIL",
      message:"Product Detail",
    })
   }
  ngOnInit(): void {
  }

}
