import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubePipe } from '../shared/custompipe/cube.pipe';

@Component({
  selector: 'app-mypipes',
  imports: [CommonModule,CubePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
  msg:string="welcome to changepond";
  emp={id:11,name:"dhanush",salary:50000,address:"chennai"}
  dateObj=new Date();

}
