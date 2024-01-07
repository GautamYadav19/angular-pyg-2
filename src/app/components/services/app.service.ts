import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
// variable :- use camel case
// function :- first letter is small and next start with camel case
  private FlagForSilder=new BehaviorSubject(0);
  // this is the method to get this variable into another component
  getFlagForSilder=this.FlagForSilder.asObservable();

  private HeaderMessage=new BehaviorSubject({message:'',title:''});
  getHeaderMessage=this.HeaderMessage.asObservable();
  
  private crossbtn =new BehaviorSubject(false);
  getCrossbtn=this.crossbtn.asObservable();

  constructor() { }
// and this is the method to set there value
  setFlagForSilder(flag:any){
  this.FlagForSilder.next(flag)
  }
  setHeaderMessage(msg:any){
    this.HeaderMessage.next(msg);
  }
  setCrossbtn(flag:boolean){
    this.crossbtn.next(flag)
  }
}
