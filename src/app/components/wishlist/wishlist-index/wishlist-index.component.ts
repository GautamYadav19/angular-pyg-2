import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-wishlist-index',
  templateUrl: './wishlist-index.component.html',
  styleUrls: ['./wishlist-index.component.css']
})
export class WishlistIndexComponent implements OnInit {

  constructor(private appService:AppService) { 
    this.appService.setCrossbtn(true)
  }

  ngOnInit(): void {
  }

}
