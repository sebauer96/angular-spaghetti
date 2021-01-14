import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  public employee:string = ""

  constructor() { }

  ngOnInit() {
  }

  public addEmployee($event){
    this.employee = $event
  }

}
