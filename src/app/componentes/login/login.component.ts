import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensajeerror={
    email:'',
    password:''
  };
  formlogin!:FormGroup;

  constructor(private formloginBuilder : FormBuilder, private userService : UsuarioService , private router : Router ){

    this.formlogin=formloginBuilder.group({
      email:['',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]
      ],
      password:['',
      [
        Validators.required,
        Validators.minLength(6)
      ]
      ],
    })

  }


  login(){
    this.userService.loginUsuario(this.formlogin.value)//envio datos del formulario
    .then(
      res=>{
            localStorage.setItem('user',JSON.stringify({'uid': res?.user.uid , 'email':res.user.email, 'photoURL':res.user?.photoURL }));
            this.router.navigate(['/home']);
          }
    )
    .catch(
      error=> {
        Swal.fire({
          icon: 'error',
          title: 'usuario y contraseña incorrecta',
        })
      }
      
    )
  }

  loginGoogle(){
    this.userService.loginGoogle()
    .then(
      res=>{
        localStorage.setItem('user',JSON.stringify({'uid': res?.user.uid , 'email':res?.user.email, 'photoURL':res.user?.photoURL }));
        console.log(res);
        this.router.navigate(['/home']);
      }
    )
    .catch(
      error=>{
        console.log(error);
      }
    )
  }

  //validacion formulario
  validacion(name: string) {
    return this.formlogin.get(name)?.errors && (this.formlogin.get(name)?.touched || this.formlogin.get(name)?.dirty);
  }
}
