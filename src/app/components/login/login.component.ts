import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VetServiceService } from 'src/app/services/vet-service.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {  
  usuarios: any[] = [];
  loginUsuario: FormGroup;
  submitted = false;
  validLogin = false;
  constructor(private fb: FormBuilder, private router:Router, private _productosServices:VetServiceService){
    this.loginUsuario = this.fb.group({
      email:['', Validators.required],
      pass:['', Validators.required]
    })
    this.validLogin = true;
  }
  ngOnInit(): void {
    this.getUsuario();
  }
  texto = "";
  getUsuario(){
    this._productosServices.getAdminVet().subscribe(data => {
      this.usuarios = [];
      data.forEach((element:any) => {
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(this.usuarios);
        
      });
    })
  }
  iniciarSesion(email: string, pass: string){
    this.getUsuario();
    this.submitted = true;
    if(this.loginUsuario.invalid){
      return;
    }
    if(this.usuarios[0].Correo == email){
      if(this.usuarios[0].Contraseña == pass){
        this.validLogin = true;
        this.router.navigate(['/pagprincipal']);      
      } else {
        this.validLogin = false;
      }    
    } else {
      this.validLogin = false;
    }
  }
}
