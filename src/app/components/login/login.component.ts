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
  
  public usuarios: Observable<any>[] = [];
  loginUsuario: FormGroup;
  submitted = false;
  validLogin = false;
  constructor(private fb: FormBuilder, private router:Router,afDB: AngularFireDatabase){
    this.loginUsuario = this.fb.group({
      email:['', Validators.required],
      pass:['', Validators.required]
    })
    const itemsRef: AngularFireList<any> = afDB.list('AdminGeneral');
    itemsRef.valueChanges()
    .subscribe(
      x=>{
        this.usuarios = x;
      }
    )
    this.validLogin = true;
  }
  ngOnInit(): void {
      
  }
  texto = "";
  iniciarSesion(email: string, pass: string){
    this.submitted = true;
    if(this.loginUsuario.invalid){
      return;
    }
    const usuariosJson = JSON.stringify(this.usuarios);
    const _usuariosJson = JSON.parse(usuariosJson);
    console.log(_usuariosJson[2]);
    
    if(_usuariosJson[2] == email){
      if(_usuariosJson[1]  == pass){
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
