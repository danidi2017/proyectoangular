import { Component, OnInit } from '@angular/core';
import {clientes} from "../clientes";
import { ClientesService } from "../clientes-service.service";
@Component({
  selector: 'clientes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  clientes: clientes;
  
  constructor(private ClientesService: ClientesService) { }

  ngOnInit() {
    this.clientes = new clientes();
  }
  onNewClick(){
    this.clientes= new clientes();
  }
  onSaveClick(){
    //alert("se ha guardado el cliente: " + this.clientes.nombre);
    this.ClientesService.clientesList.push(this.clientes);
  }

}
