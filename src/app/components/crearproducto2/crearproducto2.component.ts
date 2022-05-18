import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-crearproducto2',
  templateUrl: './crearproducto2.component.html',
  styleUrls: ['./crearproducto2.component.scss']
})
export class Crearproducto2Component implements OnInit {
  createProducto: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private _vetService: VetServiceService, private router:Router) { 
    this.createProducto = this.fb.group({
      Nombre:['', Validators.required],
      Descripcion:['', Validators.required],
      Establecimiento:['', Validators.required],
      Costo:['', Validators.required],
      Cantidad:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  agregarProducto(){
    this.submitted = true;
    if(this.createProducto.invalid){
      return;
    }
    const producto:any = {
      Nombre: this.createProducto.value.Nombre,
      Descripcion: this.createProducto.value.Descripcion,
      Establecimiento: this.createProducto.value.Establecimiento,
      Costo: this.createProducto.value.Costo,
      Cantidad: this.createProducto.value.Cantidad,
    }
    this._vetService.agregarProducto(producto).then(() => {      
      this.router.navigate(['/menuproductos2']);
    }).catch(error =>{      
      console.log(error);
    })
  }
}