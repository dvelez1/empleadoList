import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})

export class EmpleadoListComponent implements OnInit {

  listEmpleados:Empleado[]=[
    {legajo:1, nombre:'Juan', apellido:'Perez', sexo:'Masculino', salario:25000},
    {legajo:2, nombre:'Carlos', apellido:'Batista', sexo:'Masculino', salario:55000},
    {legajo:3, nombre:'David', apellido:'Perez', sexo:'Masculino', salario:50000},
    {legajo:4, nombre:'Carolina', apellido:'Herrera', sexo:'Femenino', salario:80000},
    {legajo:5, nombre:'Maria', apellido:'Ramos', sexo:'Femenino', salario:75000},
  ];

  selectedRadioButton = 'Todos';
  
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return  this.listEmpleados.length;
  }

  obtenerTotalFemeninos():number{
    return this.listEmpleados.filter(x=>x.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos():number{
    return this.listEmpleados.filter(x=>x.sexo === 'Masculino').length;
  }

}