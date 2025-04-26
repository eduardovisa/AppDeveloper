import { Component, OnInit, Input } from '@angular/core';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-numero',
  templateUrl: './list-numero.component.html',
  styleUrls: ['./list-numero.component.scss'],
  imports: [IonCol, IonGrid, IonRow],
})
export class ListNumeroComponent implements OnInit {
  @Input() multiplosGenerados: {
    numero: number;
    color: string;
    multiplos: number[];
  }[] = [];

  obtenerlistaCompleta(
    multiplosGenerados: {
      numero: number;
      color: string;
      multiplos: number[];
    }[] = []
  ): any[] {
    return multiplosGenerados;
  }

  ngOnInit() {}
}
