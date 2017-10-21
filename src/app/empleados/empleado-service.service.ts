import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empleados } from "./empleados";

@Injectable()
export class EmpleadoService {

  empleadoList:Array<empleados>;

  constructor(private http: HttpClient) { }
  
    cargarEmpleado() {
      this.http.get("http://localhost:8080/proyectoangular/webresources/co.edu.inventario.entidades.empleados").subscribe(data => {
        this.empleadoList = data as Array<empleados>;
      });
    }
  
    crearEmpleado(empleado: empleados) {
      const body = {cedula:empleado.cedula,fecnac:empleado.fecnac,cargo:empleado.cargo,genero:empleado.genero};
      this.http.post("http://localhost:8080/proyectoangular/webresources/co.edu.inventario.entidades.empleados", body)
      .subscribe(data => {
        alert('Empleado Creado');
        this.cargarEmpleado();
      });
    }

}
