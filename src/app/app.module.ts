import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//-------
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { Environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { PagesModule } from './pages/pages.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

var config={ 
        apiKey: Environment.firebase.apiKey,
        authDomain: Environment.firebase.authDomain,
        projectId: Environment.firebase.projectId,
        storageBucket: Environment.firebase.storageBucket,
        messagingSenderId: Environment.firebase.messagingSenderId,
        appId: Environment.firebase.appId
 }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    PagesModule,
    AngularFireAuthModule,
    provideFirebaseApp(()=>initializeApp(Environment.firebase)),
    provideAuth(()=>getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  
  providers: [{provide: FIREBASE_OPTIONS, useValue: Environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
