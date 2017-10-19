import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';
import { OrdenesService } from "./ordenes-service.service";


@NgModule({
  imports: [
    FormsModule,
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
    BrowserAnimationsModule
  ],
  declarations: [AddComponent, ListComponent, IndexComponent],
  providers: [OrdenesService],
})
export class OrdenesModule { }
