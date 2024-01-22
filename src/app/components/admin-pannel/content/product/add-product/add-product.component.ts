import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin.service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { 
    this.adminService.setPageShow("Add Product")
  }

  ngOnInit(): void {
  }

}
