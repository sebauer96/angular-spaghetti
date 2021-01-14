import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css'],

})
export class FormEmployeeComponent implements OnInit {

  @Output() newEmployee = new EventEmitter<string>();

  public employeeForm = new FormGroup({
    name: new FormControl('',Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.employeeForm.controls.name.hasError('required')) {
      return 'Debe ingresar un valor';
    }

    return '';
  }

  public onSubmit(){
    this.newEmployee.emit(this.employeeForm.controls.name.value)
  }

}
