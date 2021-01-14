import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { ListEmployeesComponent } from './example1/list-employees/list-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEmployeeComponent } from './shared/form-employee/form-employee.component';
import { Example2Component } from './example2/example2.component';
import { ListEmployees2Component } from './example2/list-employees-2/list-employees2.component';
import { Example3Component } from './example3/example3.component';
import { EmployeesCountComponent } from './example3/employees-count/employees-count.component';
import { ContainerEmployeeComponent } from './example3/container-employee/container-employee.component';
import { EmployeeComponent } from './example3/container-employee/employee/employee.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    ListEmployeesComponent,
    FormEmployeeComponent,
    ListEmployees2Component,
    Example3Component,
    EmployeesCountComponent,
    ContainerEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
