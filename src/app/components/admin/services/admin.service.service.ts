import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
private pageshow= new BehaviorSubject('');
getPageShow =this.pageshow.asObservable()

setPageShow(data:string){
this.pageshow.next(data)
}
private data = [
  { name: 'Apple' },
  { name: 'Banana' },
  { name: 'Orange' },
  { name: 'Mango' },
  { name: 'Grapes' },
  // Add more items as needed
];

search(query:any): any[] {
  query = query.toLowerCase();
  return this.data.filter(item => item.name.toLowerCase().includes(query));
}
  constructor() { }
}
