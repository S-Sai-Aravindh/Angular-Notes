import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName : string = "Sai Aravindh";
  imgzoro : string = "./zoro.png";

  inputData : string = "logo";

  greeting(val:string){
    window.alert(`Hello ${val}`);
  }
}
