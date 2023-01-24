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
      email:['',[
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]
      
      ],
      password:['',[
        Validators.required,
        Validators.minLength(6)
      ]
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

   //validacion formulario
   validacion(name: string) {
    return this.formRegistroUser.get(name)?.errors && (this.formRegistroUser.get(name)?.touched || this.formRegistroUser.get(name)?.dirty);
  }
}
