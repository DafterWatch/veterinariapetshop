import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VetServiceService {

  constructor(private firestore: AngularFirestore) { }
  getProductos(): Observable<any>{
    return this.firestore.collection('Productos', ref => ref.orderBy('Nombre', 'asc')).snapshotChanges();
  }
}
