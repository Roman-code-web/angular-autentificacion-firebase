import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: "registro" , component:RegisterComponent , ...canActivate(()=>redirectLoggedInTo(['/home'])) },
  { path: "login" , component:LoginComponent, ...canActivate(()=>redirectLoggedInTo(['/home'])) },
  { path: "home" , component:HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: '**', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
