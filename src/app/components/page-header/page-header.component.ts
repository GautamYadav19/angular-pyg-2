import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
message:string='';
title:string='';
  constructor(private appService:AppService) { 
this.appService.getHeaderMessage.subscribe((data)=>{
  this.message=data.message;
  this.title=data.title
})
  }

  ngOnInit(): void {
  }

}
