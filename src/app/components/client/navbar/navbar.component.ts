import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  slider:any=0;
  constructor(private appServices:AppService) { 
    this.appServices.getFlagForSilder.subscribe((data)=>{
      this.slider=data
    })
  }

  ngOnInit(): void {
  }

}
