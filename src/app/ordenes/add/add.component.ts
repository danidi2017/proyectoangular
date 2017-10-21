import { Component, OnInit } from '@angular/core';
import { ordenes } from "../ordenes";
import { OrdenesService } from "../ordenes-service.service";

@Component({
  selector: 'ordenes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 

  ordenes: ordenes;

  constructor(private OrdenesService: OrdenesService) { }

  ngOnInit() {
    this.ordenes = new ordenes();
  }
  onNewClick(){
    this.ordenes= new ordenes();
  }
  onSaveClick(){
    //alert("se ha guardado el cliente: " + this.clientes.nombre);
    this.OrdenesService.crearOrdenes(this.ordenes);
  }

}
