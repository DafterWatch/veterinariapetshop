import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VetServiceService } from 'src/app/services/vet-service.service';

@Component({
  selector: 'app-menuusuarios',
  templateUrl: './menuusuarios.component.html',
  styleUrls: ['./menuusuarios.component.scss']
})
export class MenuusuariosComponent implements OnInit {

  constructor(private router:Router, private _productosServices:VetServiceService) { }
  usuarios: any[] = [];
  ngOnInit(): void {
    this.getUsuariosLista();
  }
  getUsuariosLista(){
    this._productosServices.getUsuarios().subscribe(data => {
      this.usuarios = [];
      data.forEach((element:any) => {
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
  eliminarUsuario(id: string){
    this._productosServices.eliminarUsuario(id).then(()=>{
      console.log('Usuario eliminado con exito');
    }).catch(error => {
      console.log(error);
    })
  }
}
