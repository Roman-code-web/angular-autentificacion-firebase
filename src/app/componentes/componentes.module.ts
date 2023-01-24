import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TablaProductoComponent } from './tabla-producto/tabla-producto.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    TablaProductoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    TablaProductoComponent
  ]
})
export class ComponentesModule { }
