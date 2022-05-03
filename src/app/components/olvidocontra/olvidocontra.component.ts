import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-olvidocontra',
  templateUrl: './olvidocontra.component.html',
  styleUrls: ['./olvidocontra.component.scss']
})
export class OlvidocontraComponent implements OnInit {

  constructor(private router:Router, private _productosServices:VetServiceService) { }
  usuarios: any[] = [];
  submitted = false;
  validLogin = false;
  ngOnInit(): void {
    this.getUsuario()
    this.seEncontro = false
  }
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
  contra:string = ""
  seEncontro: boolean = false
  verificar(correo:string){
    if(correo.length > 0){
      if(this.usuarios[0].Correo == correo){
        this.contra = "La contraseña es: "+ this.usuarios[0].Contraseña
        this.seEncontro = true
      } else {
        this.contra = "No se encontro este correo"
        this.seEncontro = true
      }
    }
    
  }
}
