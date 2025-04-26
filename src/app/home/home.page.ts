import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
// Importación de componente de Multiplos
import { MultiplosPage } from '../multiplos/multiplos.page';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, MultiplosPage],
})
export class HomePage {
  constructor() {}
}
