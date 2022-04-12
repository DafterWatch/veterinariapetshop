import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-pagprincipal',
  templateUrl: './pagprincipal.component.html',
  styleUrls: ['./pagprincipal.component.scss']
})
export class PagprincipalComponent implements OnInit {
  productos: any[] = [];
  constructor(private router:Router, private _productosServices:VetServiceService){
  }
  ngOnInit(): void {
    this.getEmpleados();
  }
  modificar(){
  }
  eliminar(){
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
      console.log(this.productos);
    })
  }
}
