import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component'; 
import { ParentComponent } from './parent/parent.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { CubePipe } from './shared/custompipe/cube.pipe';
import { LoginComponent } from './layout/login/login.component';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DatabindingComponent,DirectiveComponent,ParentComponent,MypipesComponent,CubePipe,LoginComponent,ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproj';
}
