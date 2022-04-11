import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagprincipal',
  templateUrl: './pagprincipal.component.html',
  styleUrls: ['./pagprincipal.component.scss']
})
export class PagprincipalComponent implements OnInit {
  public productos: Observable<any>[] = [];
  constructor(private router:Router,afDB: AngularFireDatabase){
    const itemsRef: AngularFireList<any> = afDB.list('Veterinarias_PetShops');
    itemsRef.valueChanges()
    .subscribe(
      x=>{
        this.productos = x;
      }
    )
  }
  ngOnInit(): void {
  }

}
