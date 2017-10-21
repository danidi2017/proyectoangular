import { Component, OnInit } from '@angular/core';
import { empleados } from "../empleados";
import { EmpleadoService } from "../empleado-service.service";

@Component({
  selector: 'empleados-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private EmpleadosService: EmpleadoService) { }

  ngOnInit() {
    this.EmpleadosService.cargarEmpleado();
  }

}
