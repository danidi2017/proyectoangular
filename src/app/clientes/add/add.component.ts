import { Component, OnInit } from '@angular/core';
import {clientes} from "../clientes";
@Component({
  selector: 'clientes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  clientes: clientes;
  
  constructor() { }

  ngOnInit() {
    this.clientes = new clientes();
  }

  onSaveClick(){
    alert("se ha guardado el cliente: " + this.clientes.nombre);
  }

}
