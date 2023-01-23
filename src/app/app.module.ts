import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//-------
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { Environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(()=>initializeApp(Environment.firebase)),
    provideAuth(()=>getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
