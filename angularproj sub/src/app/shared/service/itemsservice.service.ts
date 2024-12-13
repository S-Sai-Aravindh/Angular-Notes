import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsserviceService {

  constructor() { }
  Welcome(para:any,comp:any){
    window.alert(`Welcome to ${para} in ${comp}`)
  }
}
