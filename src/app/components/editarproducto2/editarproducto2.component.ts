import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-editarproducto2',
  templateUrl: './editarproducto2.component.html',
  styleUrls: ['./editarproducto2.component.scss']
})
export class Editarproducto2Component implements OnInit {
  id: string | null;
  createProducto: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private _vetService: VetServiceService, private router:Router, private aRoute: ActivatedRoute) { 
    this.createProducto = this.fb.group({
      Nombre:['', Validators.required],
      Imagen:['', Validators.required],
      Descripcion:['', Validators.required],
      Establecimiento:['', Validators.required],
      Costo:['', Validators.required],
      Cantidad:['', Validators.required]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
    if(this.id !== null){
      this._vetService.getProducto(this.id).subscribe(data => {
        this.createProducto.setValue({
          Nombre: data.payload.data()['Nombre'],
          Imagen: data.payload.data()['Imagen'],
          Descripcion: data.payload.data()['Descripcion'],
          Establecimiento: data.payload.data()['Establecimiento'],
          Costo: data.payload.data()['Costo'],
          Cantidad: data.payload.data()['Cantidad']
        })
        console.log(this.createProducto.value);
        
      })
    }    
  }
  ngOnInit(): void {
  }
  editarEmpleado(){
    if(this.id !== null){
      const producto:any = {
        Nombre: this.createProducto.value.Nombre,
        Imagen: this.createProducto.value.Imagen,
        Descripcion: this.createProducto.value.Descripcion,
        Establecimiento: this.createProducto.value.Establecimiento,
        Costo: this.createProducto.value.Costo,
        Cantidad: this.createProducto.value.Cantidad,
      }
      this.agregarRegistro()  
      this._vetService.actualizarProducto(this.id, producto).then(() => {        
        this.router.navigate(['/menuproductos2']);
      })
    } 
  }
  agregarRegistro(){
    let id = sessionStorage.getItem('idUsuario');
    this.submitted = true;
    const fechaHoy = new Date()
    fechaHoy.toDateString()
    if(this.createProducto.invalid){
      return;
    }
    const registro:any = {
      accion: "modificación",
      fecha: fechaHoy+"",
      idUsuario: id
    } 
    
    this._vetService.agregarRegistro(registro).then(() => {      
      this.router.navigate(['/menuproductos2']);
    }).catch(error =>{      
      console.log(error);
    })
  }
}
