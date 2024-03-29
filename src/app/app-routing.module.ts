import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegistroProductoComponent } from './pages/registro-producto/registro-producto.component';
import { LoginGuard } from './guard/login.guard';


const routes: Routes = [
  { path: "registro" , component:RegisterComponent, canActivate:[LoginGuard] },
  { path: "login" , component:LoginComponent, canActivate:[LoginGuard] },
  { path: "home" , component:HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: "productoRegistro" , component:RegistroProductoComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  { path: '**', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
