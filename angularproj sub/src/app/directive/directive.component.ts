import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isCond1 : boolean=true;
  isCond2 : boolean=true;
  isCond3 : boolean=true;

  courses : string[] = ["React","Angular","Python","DotNet","Java"];
  myCourse : string = "Angular";
  myCourse2 : string = "React";

  myStyle = {
    color : this.isCond1?"red":"green",
    fontSize:!this.isCond3?"25px":"60px"
  }
  myClass = {
    txtPrimary : this.isCond1,
    txtDanger : this.isCond2,
    special : this.isCond3
  }
}
