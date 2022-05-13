import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-menumascotas',
  templateUrl: './menumascotas.component.html',
  styleUrls: ['./menumascotas.component.scss']
})
export class MenumascotasComponent implements OnInit {
  constructor(private router:Router, private _productosServices:VetServiceService) { }
  mascotas: any[] = [];
  ngOnInit(): void {
    this.getMascotasLista();
  }
  getMascotasLista(){
    this._productosServices.getMascotas().subscribe(data => {
      this.mascotas = [];
      data.forEach((element:any) => {
        this.mascotas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });      
    })
  }
  eliminarMascota(id: string){
    this._productosServices.eliminarMascota(id).then(()=>{
      console.log('Mascota eliminado con exito');
    }).catch(error => {
      console.log(error);
    })
  }
}
