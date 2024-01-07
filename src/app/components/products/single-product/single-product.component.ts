import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  crossbtn!:boolean;
  constructor(private appService :AppService) {
    this.appService.getCrossbtn.subscribe((data)=>{
      this.crossbtn=data;
    })
   }
  

  ngOnInit(): void {
  }

}
