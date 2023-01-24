import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit   {
  user:any=[];
  logeado=false;
  constructor(public userservice : UsuarioService, private router:Router){}

  ngOnInit(): void {
    
  }


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
