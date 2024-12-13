import { Component } from '@angular/core';
import { commonImgPath } from '../shared/constant/constantData';
import { CommonModule } from '@angular/common';
import { ItemsserviceService } from '../shared/service/itemsservice.service';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  itemObj = new ItemsserviceService();

  myItems:any[] = [
    {name:"Brook",price:50,description:"YO HOOO YO HOOOO" , imgPath:commonImgPath.brook},
    {name:"Ezio Auditore la Firenze",price:150,description:"Assassin's Creed" , imgPath:commonImgPath.ezio}
  ]
}
