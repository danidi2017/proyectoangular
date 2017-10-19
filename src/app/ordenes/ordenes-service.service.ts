import { Injectable } from '@angular/core';
import { ordenes } from "./ordenes";

@Injectable()
export class OrdenesService{

  ordenesList:Array<ordenes>;

  constructor() {

    this.ordenesList=[
      {
        empleados:"daniel",
        cliente:"francisco",
        fecha:"10-16-2017",
        descuento:"ninguno"
    },
    {
      empleados:"daniel",
      cliente:"julian",
      fecha:"10-21-2017",
      descuento:"ninguno"
    },
    {
      empleados:"daniel",
      cliente:"andres",
      fecha:"10-22-2017",
      descuento:"ninguno"
    },
    
  ];
  }

}
