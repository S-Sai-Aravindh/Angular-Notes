import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/service/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uid:any;
  upass:any;
  userData : any;

  constructor(private _dbServ:DbserviceService,private _router:Router){}

  checkUser() {
    // console.log(this.uid,this.upass);
    this._dbServ.getRecord("Users").subscribe((res) => {
      this.userData = res;
      const currentUser = this.userData.filter((val: any, index: any) => {
        return val.userId === this.uid && val.userpass === this.upass
      });

      if (currentUser.length > 0) {
        sessionStorage.setItem("user", this.uid);
        window.alert("Login Successfullly");
        this._router.navigate(["/maindashboard"])
      } else {
        window.alert("Wrong credentials");
        this.uid = "";
        this.upass = "";
      }
    })
  }

}
