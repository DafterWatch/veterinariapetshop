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
  actualizarVetPetShop(id: string, data:any): Promise<any>{
    return this.firestore.collection('Vet-PetShop').doc(id).update(data);
  }
  agregarRegistro(registro: any): Promise<any>{
    return this.firestore.collection('ReporteProductos').add(registro);
  }
  getRegistros(): Observable<any>{
    return this.firestore.collection('ReporteProductos', ref => ref.orderBy('fecha', 'desc')).snapshotChanges();
  }
  eliminarRegistro(id: string): Promise<any>{
    return this.firestore.collection('ReporteProductos').doc(id).delete();
  }

  getUsuarios(): Observable<any>{
    return this.firestore.collection('Usuario', ref => ref.orderBy('Nombre', 'desc')).snapshotChanges();
  }
  eliminarUsuario(id: string): Promise<any>{
    return this.firestore.collection('Usuario').doc(id).delete();
  }

  getMascotas(): Observable<any>{
    return this.firestore.collection('Mascota', ref => ref.orderBy('CIdueño', 'desc')).snapshotChanges();
  }
  eliminarMascota(id: string): Promise<any>{
    return this.firestore.collection('Mascota').doc(id).delete();
  }
  getVacunas(): Observable<any>{
    return this.firestore.collection('Vacuna', ref => ref.orderBy('Fecha', 'desc')).snapshotChanges();
  }
  eliminarVacuna(id: string): Promise<any>{
    return this.firestore.collection('Vacuna').doc(id).delete();
  }
}
