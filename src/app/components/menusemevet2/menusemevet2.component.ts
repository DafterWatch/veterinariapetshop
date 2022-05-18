import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-menusemevet2',
  templateUrl: './menusemevet2.component.html',
  styleUrls: ['./menusemevet2.component.scss']
})
export class Menusemevet2Component implements OnInit {

  modificarInformacion: FormGroup;
  submitted = false;
  vetPetShopItems: any[] = [];
  id: string = "";
  constructor(private fb: FormBuilder, private _vetService: VetServiceService, private router:Router, private aRoute: ActivatedRoute) { 
    this.modificarInformacion = this.fb.group({
      Nombre:['', Validators.required],
      Direccion:['', Validators.required],
      Telefono:['', Validators.required],
      UbicacionLat:['', Validators.required],
      UbicacionLon:['', Validators.required]
    })
    this._vetService.getVetPetShop().subscribe(data => {
      this.vetPetShopItems = [];
      data.forEach((element:any) => {
        this.vetPetShopItems.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.id = this.vetPetShopItems[0].id
      this.modificarInformacion.setValue({
        Nombre: this.vetPetShopItems[0].Nombre,
        Direccion: this.vetPetShopItems[0].Direccion,
        Telefono: this.vetPetShopItems[0].Telefono,
        UbicacionLat: this.vetPetShopItems[0].Ubicacion._lat,
        UbicacionLon: this.vetPetShopItems[0].Ubicacion._long,
      })
    })    
  }
  ngOnInit(): void {
  }
  editarInformacion(){
    const producto:any = {
      Nombre: this.modificarInformacion.value.Nombre,
      Direccion: this.modificarInformacion.value.Direccion,
      Telefono: this.modificarInformacion.value.Telefono,
      Ubicacion: {
        _lat: this.modificarInformacion.value.UbicacionLat,
        _long: this.modificarInformacion.value.UbicacionLon
      }      
    }    
    this._vetService.actualizarVetPetShop(this.id, producto).then(() => {      
      this.router.navigate(['/pagprincipaladmin']);
    })
  }
}
