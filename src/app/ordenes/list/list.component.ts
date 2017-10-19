import { Component, OnInit } from '@angular/core';
import { ordenes } from "../ordenes";
import { OrdenesService } from "../ordenes-service.service";

@Component({
  selector: 'ordenes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  constructor(private OrdenesService: OrdenesService) { }

  ngOnInit() {
    
}
}
