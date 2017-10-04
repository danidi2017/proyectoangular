import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ClientesModule}from './clientes/clientes.module';
import{EmpleadosModule}from './empleados/empleados.module';
import{ProductosModule}from './productos/productos.module';
import{ProveedoresModule}from './proveedores/proveedores.module';
import{OrdenesModule}from './ordenes/ordenes.module';
import{DetalleModule}from './detalle/detalle.module';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    EmpleadosModule,
    ProductosModule,
    ProveedoresModule,
    OrdenesModule,
    DetalleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
