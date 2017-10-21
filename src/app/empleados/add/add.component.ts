import { Component, OnInit } from '@angular/core';
import { empleados } from "../empleados";
import { EmpleadoService } from "../empleado-service.service";

@Component({
  selector: 'empleados-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  empleados: empleados;

  constructor(private EmpleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleados = new empleados();
  }

  onNewClick(){
    this.empleados = new empleados();
  }
  onSaveClick(){
    //alert("se ha guardado el cliente: " + this.clientes.nombre);
    this.EmpleadoService.crearEmpleado(this.empleados);
  }

}
