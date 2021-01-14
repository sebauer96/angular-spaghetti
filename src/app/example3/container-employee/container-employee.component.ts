import { Component, OnInit } from '@angular/core';
import { Employee } from '../interface/employee';

@Component({
  selector: 'app-container-employee',
  templateUrl: './container-employee.component.html',
  styleUrls: ['./container-employee.component.css']
})
export class ContainerEmployeeComponent implements OnInit {

  public employees:Array<Employee> = [
    {
      name: "Michael Scott",
      age: 58,
      photo: "https://www.rollingstone.com.mx/wp-content/uploads/2020/03/prison-mike.png",
      realName: "Steve Carell",
      bio: "Michael Gary Scott (n. el 15 de marzo de 1964) es un personaje de la serie estadunidense The Office, es interpretado por el actor Steve Carell. En la versión británica original Ricky Gervais interpreta al mismo personaje pero con el nombre de 'David Brent'"
    },
    {
      name: "Dwight Schrute",
      age: 51,
      photo: "https://album.mediaset.es/eimg/2017/09/23/2ePRXiD9Tz79UO30UXQor4.jpg?w=480",
      realName: "Rainn Wilson",
      bio: "Es un agente vendedor y el segundo al mando del director regional (durante las primeras temporadas) en la compañía de distribución de papel Dunder Mifflin"
    },
    {
      name: "Jim Halpert",
      age: 42,
      photo: "https://miro.medium.com/max/2510/0*Xz-_cHSO6txphvHt.png",
      realName: "John Krasinski",
      bio: "James 'Jim' Duncan Halpert es un personaje de ficción de la serie de televisión The Office, interpretado por John Krasinski, basado en el rol original de la serie británica The Office interpretado por Martin Freeman."
    },
    {
      name: "Pam Beesley",
      age: 43,
      photo: "https://i.pinimg.com/736x/bf/68/d8/bf68d81d964dbd8a51ce740d0c618041.jpg",
      realName: "Jenna Fischer",
      bio: "Pam Beesly es una de las empleadas de oficina en la sucursal de Scranton de la ficticia distribuidora de papel Dunder-Mifflin. Muchos episodios de la serie giran en torno a su deseo de ser más asertiva y tiene una carrera artística, así como su relación con su compañero de trabajo Jim Halpert"
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
