import { Injectable } from '@angular/core';
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:any=[];
  logeado=false;
  //auth
  constructor( private auth : Auth  , private authAngular : AngularFireAuth ) { }

  //funcion registrar
  registrarUsuario({ email, password}:any){ 
    return createUserWithEmailAndPassword(this.auth,email,password);
  }
  //funcion login
  loginUsuario({ email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //login con google 

  loginGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  //funcion logout
  logout(){
    localStorage.removeItem('user');
    return signOut(this.auth);
  }

  islogeado(){
    if(localStorage.getItem('user')){
      this.usuario=JSON.parse(String(localStorage.getItem('user')) );
      this.logeado=true;
      return true;
    }else{
      this.logeado=false;
      return false;
    }
  }
  /*funcion usuario logeado
  getUsuario(){
    return this.authAngular.authState.subscribe(
      
          res=>{
            localStorage.setItem('user',JSON.stringify({'email':res?.email,'uid':res?.uid, 'photoURL':res?.photoURL}))
            this.usuario= JSON.parse(String(localStorage.getItem('user')) ),
            console.log(this.usuario.email )
          },
          error=>{
            console.log(error);
          }
        )
  }
 */
}
