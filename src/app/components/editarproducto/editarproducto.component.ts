import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.scss']
})
export class EditarproductoComponent implements OnInit {
  id: string | null;
  createProducto: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private _vetService: VetServiceService, private router:Router, private aRoute: ActivatedRoute) { 
    this.createProducto = this.fb.group({
      Nombre:['', Validators.required],
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
          Descripcion: data.payload.data()['Descripcion'],
          Establecimiento: data.payload.data()['Establecimiento'],
          Costo: data.payload.data()['Costo'],
          Cantidad: data.payload.data()['Cantidad']
        })
      })
    }    
  }
  ngOnInit(): void {
  }
  editarEmpleado(){
    if(this.id !== null){
      const producto:any = {
        Nombre: this.createProducto.value.Nombre,
        Descripcion: this.createProducto.value.Descripcion,
        Establecimiento: this.createProducto.value.Establecimiento,
        Costo: this.createProducto.value.Costo,
        Cantidad: this.createProducto.value.Cantidad,
      }
      this._vetService.actualizarProducto(this.id, producto).then(() => {      
        this.router.navigate(['/menuproductos']);
      })
    } 
  }
}
