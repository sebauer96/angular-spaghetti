import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../interface/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees-count',
  templateUrl: './employees-count.component.html',
  styleUrls: ['./employees-count.component.css']
})
export class EmployeesCountComponent implements OnInit {

  public listEmployee: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) { 
    this.listEmployee = this.employeeService.currentDataEmployee$
  }

  ngOnInit() {
  }

  public deleteEmployee(employee:Employee){
    this.employeeService.removeElementCart(employee)
  }

}
