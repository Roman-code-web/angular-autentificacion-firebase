import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { signInWithRedirect } from '@angular/fire/auth';
const routes: Routes = [
  { path: "registro" , component:RegisterComponent },
  { path: "login" , component:LoginComponent },
  { path: "home" , component:HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: '**', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }