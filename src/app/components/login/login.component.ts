import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  items: Observable<any[]>;
  loginUsuario: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router:Router,firestore: AngularFirestore) {
    this.loginUsuario = this.fb.group({
      email:['', Validators.required],
      pass:['', Validators.required]
    })
    this.items = firestore.collection('AdminGeneral').valueChanges();
    this.items.forEach(element => {      
      console.log(element[0])
    });
   }

  ngOnInit(): void {
  }
  iniciarSesion(){
    this.submitted = true;
    if(this.loginUsuario.invalid){
      return;
    }
    this.router.navigate(['/pagprincipal']);
  }

}
