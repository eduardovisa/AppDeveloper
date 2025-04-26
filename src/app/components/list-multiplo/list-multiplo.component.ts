import { Component, OnInit, Input } from '@angular/core';
import {
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-multiplo',
  templateUrl: './list-multiplo.component.html',
  styleUrls: ['./list-multiplo.component.scss'],
  imports: [IonList, IonGrid, IonRow, IonCol, IonLabel],
})
export class ListMultiploComponent implements OnInit {
  // Data que recibe del padre
  @Input() multiplosGenerados: {
    numero: number;
    color: string;
    multiplos: number[];
  }[] = [];

  @Input() multiplosLista: { multiplo: number; color: string }[] = [];

  nuevosMultiplos: { [key: number]: number[] } = {};

  // Agrupar por multiplos
  agruparPorMultiplos(arrObj: any[]) {
    const resultado: { [key: number]: number[] } = {};

    for (const objeto of arrObj) {
      for (const multiplo of objeto.multiplos) {
        if (!resultado[multiplo]) {
          resultado[multiplo] = [];
        }
        resultado[multiplo].push(objeto.numero);
      }
    }

    return resultado;
  }

  obtenerlistaAgrupada(arrObj: any[]) {
    return this.agruparPorMultiplos(arrObj);
  }

  obtenerlistaGeneral(
    multiplosLista: { multiplo: number; color: string }[] = []
  ) {
    return multiplosLista;
  }

  ngOnInit() {
    this.nuevosMultiplos = this.agruparPorMultiplos(this.multiplosGenerados);
  }
}
