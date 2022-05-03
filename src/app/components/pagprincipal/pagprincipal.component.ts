import { Component, OnInit } from '@angular/core';
import { VetServiceService } from 'src/app/services/vet-service.service';


@Component({
  selector: 'app-pagprincipal',
  templateUrl: './pagprincipal.component.html',
  styleUrls: ['./pagprincipal.component.scss']
})
export class PagprincipalComponent implements OnInit {
 
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
