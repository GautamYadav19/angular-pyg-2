import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-contactus-index',
  templateUrl: './contactus-index.component.html',
  styleUrls: ['./contactus-index.component.css']
})
export class ContactusIndexComponent implements OnInit {

  constructor(private appService:AppService) {
    this.appService.setHeaderMessage({
      title:"CONTACT US",
      message:"CONTACT US"
    })
   }
  ngOnInit(): void {
  }

}
