import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  base_URL : string="http://localhost:8000";
  constructor(public httpObj:HttpClient) { }

  getRecord(tablename:any){
    return this.httpObj.get(`${this.base_URL}/${tablename}`)
  }

  deleteRecord(tablename:any,id:any){
    return this.httpObj.delete(`${this.base_URL}/${tablename}/${id}`)
  }

  addRecord(tablename:any,body:any){
    return this.httpObj.post(`${this.base_URL}/${tablename}`,body);
  }

  getSingleRecord(tablename:any,id:any){
    return this.httpObj.get(`${this.base_URL}/${tablename}/${id}`)
  }

  updaterecord(tablename:any,id:any,body:any){
    return this.httpObj.put(`${this.base_URL}/${tablename}/${id}`,body)
  }
}
