import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user:any=[];
  constructor(public userservice : UsuarioService, private router:Router){}
 
  userlogeado=this.userservice.getUsuario().subscribe(
    res=>{
      this.user=res;
    },
    error=>{
      console.log(error);
    }
  )

  logout(){
    this.userservice.logout()
    .then(
      res=>{
        console.log(res);
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
