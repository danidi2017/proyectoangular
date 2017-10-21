import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';
import { EmpleadoService } from "./empleado-service.service";






@NgModule({
  imports: [
    CommonModule,
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
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [AddComponent, ListComponent, IndexComponent],
  providers: [EmpleadoService],
  
  
})
export class EmpleadosModule { }
