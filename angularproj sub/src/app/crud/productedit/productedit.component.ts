import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/service/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productedit',
  imports: [FormsModule],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
  id:any;
  proData:any;

  constructor(private _actRoute:ActivatedRoute,private _dbObj:DbserviceService,private _router:Router){}

  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
      console.log(param);
      this.id=param.id;
      this._dbObj.getSingleRecord("Products",this.id).subscribe((res:any)=>{
        this.proData={...res}
      })
    })
  }

  addData(val:any){
    this._dbObj.updaterecord("Products",this.id,val).subscribe(()=>{
      window.alert("product updated successfully");
      this._router.navigate(["/maindashboard/proddash"]);
    })
  }
}
