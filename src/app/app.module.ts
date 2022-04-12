import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PagprincipalComponent } from './components/pagprincipal/pagprincipal.component';
import { MenuproductosComponent } from './components/menuproductos/menuproductos.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './components/editarproducto/editarproducto.component';

const firebaseConfig = {
  apiKey: "AIzaSyCG4qCrYXtAO8GtmQVdPHNCAm6HvD2ZG98",
  authDomain: "app-vet-ce680.firebaseapp.com",
  databaseURL: "https://app-vet-ce680-default-rtdb.firebaseio.com",
  projectId: "app-vet-ce680",
  storageBucket: "app-vet-ce680.appspot.com",
  messagingSenderId: "1009334479274",
  appId: "1:1009334479274:web:433c8653e92eafbdc8e3d3",
  measurementId: "G-B5BG4M5QE6"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PagprincipalComponent,
    MenuproductosComponent,
    CrearproductoComponent,
    EditarproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
