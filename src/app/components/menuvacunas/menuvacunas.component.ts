import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-menuvacunas',
  templateUrl: './menuvacunas.component.html',
  styleUrls: ['./menuvacunas.component.scss']
})
export class MenuvacunasComponent implements OnInit {
  constructor(private router:Router, private _productosServices:VetServiceService) { }
  vacunas: any[] = [];
  ngOnInit(): void {
    this.getVacunasLista();
  }
  getVacunasLista(){
    this._productosServices.getVacunas().subscribe(data => {
      this.vacunas = [];
      data.forEach((element:any) => {
        this.vacunas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      }); 
      console.log(this.vacunas[0].Mascota);
           
    })
  }
  eliminarVacuna(id: string){
    this._productosServices.eliminarVacuna(id).then(()=>{
      console.log('Vacuna eliminado con exito');
    }).catch(error => {
      console.log(error);
    })
  }
}
