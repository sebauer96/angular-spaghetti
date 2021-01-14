import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  public employee:string = ""

  constructor() { }

  ngOnInit() {
  }

  public addEmployee($event){
    this.employee = $event
  }

}
