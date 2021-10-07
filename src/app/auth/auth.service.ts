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


    /* CRUD - NOTICIAS EN FIREBASE */            
    agregar(valores: any, path: string): Promise<any>{
    return this.firestore.collection(path).add(valores);
    }
  
     /* CRUD - MOSTRAR LAS NOTICIAS DESDE FIREBASE*/   
     getservicios( path: string): Observable<any>{
      return this.firestore.collection(path, ref =>ref.orderBy('fechacreacion','asc')).snapshotChanges();
    }
    
  
    /* CRUD - MOSTRAR LAS NOTICIAS DESDE FIREBASE*/   
    getMostrar( path: string): Observable<any>{
      return this.firestore.collection(path, ref =>ref.orderBy('fechacreacion', 'desc').limit(15)).snapshotChanges();
    }
  
    /* CRUD - MOSTRAR VOLUNTARIOS REGISTRADOS*/   
    getVoluntarios( path: string): Observable<any>{
      return this.firestore.collection(path, ref => ref.orderBy('fechaCreacion', 'desc')).snapshotChanges();
    }
  
    /*ELIMINAR EMPLEADO*/
    eliminarNoticia(id: string, path: string): Promise<any>{
      return this.firestore.collection(path).doc(id).delete();
    }
  
     /*TRAER UNA SOLA NOTICIA*/
    getNoticia(id: string, path: string): Observable<any>{
      return this.firestore.collection(path).doc(id).snapshotChanges();
    }
  
    /*ACTUALIZAR O EDITAR*/
    actualizarNoticia(path: string, id: string, data: any): Promise<any>{
      return this.firestore.collection(path).doc(id).update(data);
    }

  /* TENEMOS UN USUARIO */
  hasUser(){
    return this.afAuth.authState;
  }
 
}


  

