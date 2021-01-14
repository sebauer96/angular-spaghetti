import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  public addEmployee() {
    this.employeeService.addEmployee(this.employee);
  }

}
