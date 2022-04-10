import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VetServiceService {

  constructor(private firestore: AngularFirestore) { }
  getEmpleado(email:string):Observable<any>{
    return this.firestore.collection('AdminGeneral').doc("mIMQ0faPV5Mg4lJYCpWg").snapshotChanges();
  }
}
