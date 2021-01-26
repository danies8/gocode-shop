import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
   title = "bla;}";

  OnToggle ():void{
    this.title = this.title =="" ? "bla" :"";
  }
}
