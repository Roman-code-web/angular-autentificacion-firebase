import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formlogin!:FormGroup;

  constructor(private formloginBuilder : FormBuilder, private userService : UsuarioService , private router : Router ){
    this.formlogin=formloginBuilder.group({
      email:['',
      Validators.required
      ],
      password:['',
      Validators.required
      ],
    })
  }
  login(){
    this.userService.loginUsuario(this.formlogin.value)
    .then(
      res=>{
          console.log(res);
          this.userService.logeado=true;
          this.router.navigate(['/home']);
          }
    )
    .catch(
      error=> {
        console.log(error);
      }
      
    )
  }
}
