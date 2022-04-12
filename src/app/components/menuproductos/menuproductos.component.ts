import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-menuproductos',
  templateUrl: './menuproductos.component.html',
  styleUrls: ['./menuproductos.component.scss']
})
export class MenuproductosComponent implements OnInit {

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
