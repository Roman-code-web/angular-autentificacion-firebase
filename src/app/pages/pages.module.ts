import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    RegistroProductoComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
