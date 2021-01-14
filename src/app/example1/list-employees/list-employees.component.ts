import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  @Input() employee = "";
  public currentEmployee: string = "";
  public lastEmployee: string = "";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange){
    if(changes["employee"].currentValue != changes["employee"].previousValue){
      this.currentEmployee = changes["employee"].currentValue;
      this.lastEmployee = changes["employee"].previousValue;
    }
  }



}
