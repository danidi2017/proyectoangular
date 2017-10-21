import { Injectable } from '@angular/core';
import { clientes } from "./clientes";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ClientesService {

  clientesList:Array<clientes>;

  constructor(private http: HttpClient) { }
  
    cargarCliente() {
      this.http.get("http://localhost:8080/proyectoangular/webresources/co.edu.inventario.entidades.clientes").subscribe(data => {
        this.clientesList = data as Array<clientes>;
      });
    }
  
    crearCliente(cliente: clientes) {
      const body = {cedula:cliente.cedula,direccion:cliente.direccion,nombrecontacto:cliente.nombrecontacto,email:cliente.email};
      this.http.post("http://localhost:8080/proyectoangular/webresources/co.edu.inventario.entidades.clientes", body)
      .subscribe(data => {
        alert('Cliente Creado');
        this.cargarCliente();
      });
    }
  }


