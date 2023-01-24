import { Injectable } from '@angular/core';
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //auth
  constructor( private auth :Auth) { }

  //funcion registrar
  registrarUsuario({ email, password}:any){ 
    return createUserWithEmailAndPassword(this.auth,email,password);
  }
  //funcion login
  loginUsuario({ email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

}
