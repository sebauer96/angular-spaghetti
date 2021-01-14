import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private employee = new BehaviorSubject<Array<Employee>>(null);
  public currentDataEmployee$ = this.employee.asObservable();

  constructor() { }

  public addEmployee(newData: Employee) {
    debugger;
    //Obtenemos el valor actual
    let listEmployee = this.employee.getValue();
    //Si no es el primer item de la lista
    if(listEmployee)
    {
      //Buscamos si ya cargamos esa persona
      let objIndex = listEmployee.findIndex((obj => obj.name == newData.name));
      //Si ya cargamos uno aumentamos su cantidad
      if(objIndex != -1)
      {
        listEmployee[objIndex].count += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        newData.count = 1;
        listEmployee.push(newData);
      }  
    }
    //Si es el primer elemento lo inicializamos
    else {
      listEmployee = [];
      newData.count = 1;
      listEmployee.push(newData);
    }

    this.employee.next(listEmployee);
  }

  public removeElementCart(newData:Employee){
    //Obtenemos el valor actual de employee
    let listEmployee = this.employee.getValue();
    //Buscamos el item del employee para eliminar
    let objIndex = listEmployee.findIndex((obj => obj.name == newData.name));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si volvemos a agregarlo la cantidad no se reiniciará)
      listEmployee[objIndex].count = 1;
      //Eliminamos el item del array del employee
      listEmployee.splice(objIndex,1);
    }

    this.employee.next(listEmployee);

  }

}
