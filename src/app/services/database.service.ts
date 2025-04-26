import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private resultadosRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.resultadosRef = db.list('resultados');
  }

  guardarResultados(data: any[]) {
    return this.resultadosRef.push(data);
  }

  obtenerNumeroDeResultados(): Observable<number> {
    return this.resultadosRef
      .snapshotChanges()
      .pipe(map((changes) => changes.length));
  }

  obtenerHistorial(): Observable<number[]> {
    return this.resultadosRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => {
          // Asumiendo que cada elemento es un array
          const data = c.payload.val();
          return Array.isArray(data) ? data.length - 1 : 0;
        })
      )
    );
  }
}
