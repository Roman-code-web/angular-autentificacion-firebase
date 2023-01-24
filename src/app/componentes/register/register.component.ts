import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  formRegistroUser!:FormGroup;

  constructor(private formRegisBuilder: FormBuilder, private usuarioService:UsuarioService, private router:Router){
    
    this.formRegistroUser=formRegisBuilder.group({
      email:['',
      Validators.required
      ],
      password:['',
      Validators.required
      ],
    })

  }
  registrarUsuario(){
    //enviamos los datos
    this.usuarioService.registrarUsuario(this.formRegistroUser.value)
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
