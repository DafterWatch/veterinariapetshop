import { Component, OnInit } from '@angular/core';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-registroproductos',
  templateUrl: './registroproductos.component.html',
  styleUrls: ['./registroproductos.component.scss']
})
export class RegistroproductosComponent implements OnInit {

  constructor(private _productosServices:VetServiceService) { }
  registros: any[] = [];
  ngOnInit(): void {
    this.getRegistros()
  }
  getRegistros(){
    this._productosServices.getRegistros().subscribe(data => {
      this.registros = [];
      data.forEach((element:any) => {
        this.registros.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
  eliminarRegistro(id: string){
    this._productosServices.eliminarRegistro(id).then(()=>{
      console.log('Producto eliminado con exito');
    }).catch(error => {
      console.log(error);
    })
  }
}
