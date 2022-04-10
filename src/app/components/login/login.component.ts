import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router:Router,) {
    this.loginUsuario = this.fb.group({
      email:['', Validators.required],
      pass:['', Validators.required]
    })
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
