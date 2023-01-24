import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public userservice : UsuarioService, private router:Router){}
  
  logout(){
    this.userservice.logout()
    .then(
      res=>{
        console.log(res);
        this.userservice.logeado=false;
        this.router.navigate(['/login']);
      }
    )
    .catch(
      error=>{
        console.log(error);
      }
    )
  }
  
}
