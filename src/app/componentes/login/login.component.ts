import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formlogin!:FormGroup;

  constructor(private formloginBuilder : FormBuilder){
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
    console.log(this.formlogin.value)
  }
}
