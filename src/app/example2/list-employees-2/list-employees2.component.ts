import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-list-employees2',
  templateUrl: './list-employees2.component.html',
  styleUrls: ['./list-employees2.component.css']
})
export class ListEmployees2Component implements OnInit {

  public currentEmployee: string;
  public lastEmployee: string = "";

  get employee(): string {
    return this.currentEmployee;
  } //Esto podria no ir y usar directamente currentEmployee

  @Input() set employee(value: string) {
    this.lastEmployee = this.currentEmployee;
    this.currentEmployee = value;
  }

  constructor() { }

  ngOnInit() {
  }




}
