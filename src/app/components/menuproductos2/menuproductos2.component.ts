import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-menuproductos2',
  templateUrl: './menuproductos2.component.html',
  styleUrls: ['./menuproductos2.component.scss']
})
export class Menuproductos2Component implements OnInit {

  constructor(private router:Router, private _productosServices:VetServiceService) { }
  productos: any[] = [];
  ngOnInit(): void {
    this.getEmpleados();
  }
  getEmpleados(){
    this._productosServices.getProductos().subscribe(data => {
      this.productos = [];
      data.forEach((element:any) => {
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
  eliminarProducto(id: string){
    this._productosServices.eliminarProducto(id).then(()=>{
      console.log('Producto eliminado con exito');
    }).catch(error => {
      console.log(error);
    })
  }
}
