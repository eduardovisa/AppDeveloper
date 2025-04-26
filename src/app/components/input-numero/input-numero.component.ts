import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss'],
  imports: [IonInput, IonButton, IonItem, FormsModule],
})
export class InputNumeroComponent {
  // Variable de número ingresado por el usuario
  numero: number | null = null;

  // Evento para emitir el número validado
  @Output() onSubmitNumero = new EventEmitter<number>();

  // Validación para activar/desactivar botón de 'Calcular'
  validarNumero(numero: any): boolean {
    if (numero == 0) return false;
    return (
      numero == null ||
      numero == undefined ||
      numero == '' ||
      !Number.isInteger(numero)
    );
  }

  // Función para enviar el número al componente padre
  submitNumero() {
    if (this.numero !== null && Number.isInteger(this.numero)) {
      this.onSubmitNumero.emit(this.numero);
    }
  }
}
