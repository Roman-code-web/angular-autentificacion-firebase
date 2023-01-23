import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegistroUser!:FormGroup;
  constructor(private formRegisBuilder: FormBuilder){
    this.formRegistroUser=formRegisBuilder.group({
      nombre:['',
      Validators.required
      ],
      email:['',
      Validators.required
      ],
      password:['',
      Validators.required
      ],
    })
  }
  registrarUsuario(){
    console.log(this.formRegistroUser.value)
  }
}
