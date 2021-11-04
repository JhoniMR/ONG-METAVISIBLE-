import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore,
              public afAuth: AngularFireAuth,
              private router: Router) { }
    
  
    /* CRUD - MOSTRAR LAS NOTICIAS DESDE FIREBASE*/   
    getMostrar( path: string): Observable<any>{
      return this.firestore.collection(path, ref =>ref.orderBy('fechacreacion', 'desc').limit(15)).snapshotChanges();
    }


}


  

