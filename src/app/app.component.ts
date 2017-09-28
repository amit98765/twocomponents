import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myArr: number[] = [];
  removedArr: number[] = [];
  math = Math;


  classname: string = "myclass";
  title2: string = "This is a bad title that is terrible";

}
