import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  items: Observable<any[]>;
  loginUsuario: FormGroup;
  submitted = false;
  validLogin = false;
  constructor(private fb: FormBuilder, private router:Router,firestore: AngularFirestore) {
    this.loginUsuario = this.fb.group({
      email:['', Validators.required],
      pass:['', Validators.required]
    })
    this.items = firestore.collection('AdminGeneral').valueChanges();
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
    let i = 0;
    this.items.forEach(element => {     
      if(element[i].Correo == email){
        if(element[i].Contraseña == pass){
          this.validLogin = true;
          this.router.navigate(['/pagprincipal']);      
        } else {
          this.validLogin = false;
        }
      } else {
        this.validLogin = false;
      }
      i++
    });    
  }

}
