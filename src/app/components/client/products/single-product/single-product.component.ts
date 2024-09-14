import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { AdminServiceService } from 'src/app/components/admin/services/admin.service.service';
import { ApiServiceService } from 'src/app/components/admin/Adminservice/api.service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  // abhi ka liya mai yaha api se data le raha hu baad  mai service ka use karka isko ek
  // sabse ek ek karka send karenge data
  crossbtn!: boolean;
  constructor(private appService: AppService, private api: ApiServiceService) {
    this.appService.getCrossbtn.subscribe((data) => {
      this.crossbtn = data;
    });
    console.log(this.products)
  }

  products: any = [];

  readProduct() {
    this.api.getproductlist().subscribe((data: any) => {
      this.products = data;
      console.log(data)
    });
  }
  ngOnInit(): void {
    this.readProduct();
  }
}
