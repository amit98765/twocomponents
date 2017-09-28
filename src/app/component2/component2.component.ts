import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myDetails',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input('name') Name: string;
  @Input('occupation') Job: string;

  constructor() {
    this.Name= "fahad";
    this.Job = "cleaner";
   }

  ngOnInit() {
  }

}
