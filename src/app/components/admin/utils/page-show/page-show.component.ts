import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin.service.service';

@Component({
  selector: 'app-page-show',
  templateUrl: './page-show.component.html',
  styleUrls: ['./page-show.component.css']
})
export class PageShowComponent implements OnInit {
 text!:string;

  constructor(private adminService:AdminServiceService) { 
    this.adminService.getPageShow.subscribe((data)=>{
      this.text=data
    })
  }

  ngOnInit(): void {
  }

}
