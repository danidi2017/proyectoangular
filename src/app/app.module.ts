import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule, 
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  //MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule, 
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule, 
  MdSortModule, 
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  
  } from '@angular/material';

import{IndexComponent}from './clientes/index/index.component';
import{AddComponent as ordenesaddcomponent} from './ordenes/add/add.component';



const appRoutes: Routes = [
  {path:  'clientes/index',component: IndexComponent},
  {path:  'ordenes/add',component: ordenesaddcomponent},
 
]


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
    BrowserAnimationsModule,
    MdAutocompleteModule, 
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    //MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule, 
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule, 
    MdSortModule, 
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    ClientesModule,
    EmpleadosModule,
    ProductosModule,
    ProveedoresModule,
    OrdenesModule,
    DetalleModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
