import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(private appService:AppService) { 
    this.appService.setFlagForSilder(1)      
    }
  

  ngOnInit(): void {
  }

}
