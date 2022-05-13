import { Component, OnInit } from '@angular/core';
import { VetServiceService } from '../services/vet-service.service';

@Component({
  selector: 'app-pagprincipaladmin',
  templateUrl: './pagprincipaladmin.component.html',
  styleUrls: ['./pagprincipaladmin.component.scss']
})
export class PagprincipaladminComponent implements OnInit {

  constructor(private _productosServices:VetServiceService){
  }
  vetPetShopItems: any[] = [];
  ngOnInit(): void {
    this.getEmpleados();
  }
  getEmpleados(){
    this._productosServices.getVetPetShop().subscribe(data => {
      this.vetPetShopItems = [];
      data.forEach((element:any) => {
        this.vetPetShopItems.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
}
