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
  agregarProducto(producto: any): Promise<any>{
    return this.firestore.collection('Productos').add(producto);
  }
  eliminarProducto(id: string): Promise<any>{
    return this.firestore.collection('Productos').doc(id).delete();
  }
  actualizarProducto(id: string, data:any): Promise<any>{
    return this.firestore.collection('Productos').doc(id).update(data);
  }
  getProducto(id:string):Observable<any>{
    return this.firestore.collection('Productos').doc(id).snapshotChanges();
  }
  getVetPetShop(): Observable<any>{
    return this.firestore.collection('Vet-PetShop').snapshotChanges();
  }
  getAdminVet(): Observable<any>{
    return this.firestore.collection('Admin_vet').snapshotChanges();
  }
}
