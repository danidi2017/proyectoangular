import { Component, OnInit } from '@angular/core';
import { clientes } from "../clientes";

@Component({
  selector: 'clientes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
