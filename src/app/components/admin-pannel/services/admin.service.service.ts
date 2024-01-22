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

  constructor() { }
}
