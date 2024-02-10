import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AdminServiceService } from '../../../services/admin.service.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { ApiServiceService } from '../../../Adminservice/api.service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  constructor(private adminService:AdminServiceService,private formbuilder:FormBuilder,private apiService:ApiServiceService) { 
    this.adminService.setPageShow("Add Product");
    console.log(this.dlist)
  }
  addProduct = this.formbuilder.group({
    pname:[''],
    Category:[''],
    image:[''],
    desc:this.formbuilder.group({
      dlist:this.formbuilder.array([this.formbuilder.control('')]),
      dtable:this.formbuilder.array([
      this.formbuilder.group({
        header:[''],
        des:['']
      })
    ]),
  }),
    price:this.formbuilder.group({
      fakeprice:[''],
      realprice:[''],
      percentage:[''],
      tax:[''],//isko database mai add nahi kara hai abhi,
    }),
    inventory:this.formbuilder.group({
      quantity:[''],
      warranty:['']
    }),
  })
  searchResults: any[] = [];
  get dlist(){
    return (<FormArray>this.addProduct.get('desc.dlist') as FormArray);
  }
  ADD_dlist(){
    this.dlist.push(this.formbuilder.control(''))
  }
  get dtable():FormArray{
    return <FormArray>this.addProduct.get('desc.dtable') ;
  }
  Add_dtable(){
    this.dtable.push(
      this.formbuilder.group({
        header:[''],
        des:['']
      })

    )
   
  }


  ngOnInit(): void {
this.category?.valueChanges.subscribe((data)=>{
  this.searchResults=this.adminService.search(data)
})

  }
  get category(){
    return this.addProduct.get('Category');
  }
  onSubmit(){
    console.log(this.addProduct.value)
    return this.apiService.createProduct(this.addProduct.value).subscribe((data)=>{
      console.log(data)
    })
  }

}
