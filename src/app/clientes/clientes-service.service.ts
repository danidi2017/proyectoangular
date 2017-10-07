import { Injectable } from '@angular/core';
import { clientes } from "./clientes";

@Injectable()

export class ClientesServiceService {

  clientesList:Array<clientes>;

  constructor() { 
    this.clientesList = [
      {
      nombre:"jose",
      cedula: 12345,
      direccion:"sultana",
      email:"daniel@2010"
      },
      
      {
        nombre:"manuel",
        cedula: 123564,
        direccion:"sultana",
        email:"manuel@2010"
        },
      {
          nombre:"maria",
          cedula: 234456,
          direccion:"sultana",
          email:"maria@2010"
          },
      {
            nombre:"oscar",
            cedula: 23445,
            direccion:"sultana",
            email:"oscar@2010"
            },
    ];
  }

  }


