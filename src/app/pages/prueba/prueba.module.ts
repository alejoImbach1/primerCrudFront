import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaPageComponent } from './prueba-page/prueba-page.component';
import { ListarComponent } from './listar/listar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ComunModule } from '@components/comun.module';


@NgModule({
  declarations: [
    PruebaPageComponent,
    ListarComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComunModule,
    SweetAlert2Module
  ]
})
export class PruebaModule { }
