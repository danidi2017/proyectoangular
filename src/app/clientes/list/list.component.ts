import { Component, OnInit } from '@angular/core';
import { clientes } from "../clientes";

@Component({
  selector: 'clientes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clientesList:Array<clientes>;
  constructor() { }

  ngOnInit() {
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
