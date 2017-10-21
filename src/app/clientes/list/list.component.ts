import { Component, OnInit } from '@angular/core';
import { clientes } from "../clientes";
import { ClientesService } from "../clientes-service.service";

@Component({
  selector: 'clientes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private ClientesService: ClientesService) { }

  ngOnInit() {
    this.ClientesService.cargarCliente();
  }

}
