import { Component, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
// import { ParentComponent } from '../parent/parent.component';
import { Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() pdata:any;
  @Output() eventObj = new EventEmitter()

  senData(val:any){
    // console.log(val);
    this.eventObj.emit(val);
  }
}
