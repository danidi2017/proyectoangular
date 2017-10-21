import { Injectable } from '@angular/core';
import { ordenes } from "./ordenes";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdenesService{

  ordenesList:Array<ordenes>;

  constructor(private http: HttpClient) { }
  
    cargarOrdenes() {
      this.http.get("http://localhost:8080/proyectoangular/webresources/co.edu.inventario.entidades.ordenes").subscribe(data => {
        this.ordenesList = data as Array<ordenes>;
      });
    }
  
    crearOrdenes(orden: ordenes) {
      const body = {fecha:orden.fecha,proveedor:orden.proveedor,cliente:orden.cliente,producto:orden.producto};
      this.http.post("http://localhost:8080/proyectoangular/webresources/co.edu.inventario.entidades.ordenes", body)
      .subscribe(data => {
        alert('orden Creada ');
        this.cargarOrdenes();
      });
    }

}
