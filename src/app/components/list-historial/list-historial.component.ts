import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
  IonContent,
  IonLabel,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-list-historial',
  templateUrl: './list-historial.component.html',
  styleUrls: ['./list-historial.component.scss'],
  imports: [IonLabel, IonList, IonItem, IonButton],
})
export class ListHistorialComponent implements OnInit {
  // Data recibida desde el padre
  @Input() numerosBuscados: Observable<number[]> = EMPTY;
  resultados: number[] = [];

  // Enviado de información para el padre y cambiar estados en pantalla
  @Output() onSubmitNumeroHistorial = new EventEmitter<number>();

  obtenerlistaCompleta(
    numerosBuscados: Observable<number[]> = EMPTY
  ): Observable<number[]> {
    return numerosBuscados;
  }

  // Función para enviar el número al componente padre
  submitNumeroHistorial(numero: number) {
    this.onSubmitNumeroHistorial.emit(numero);
  }

  ngOnInit() {
    this.numerosBuscados.subscribe((numeros) => {
      this.resultados = numeros;
    });
  }
}
