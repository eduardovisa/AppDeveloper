// imports
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Observable, EMPTY } from 'rxjs';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { InputNumeroComponent } from '../components/input-numero/input-numero.component';
import { ListNumeroComponent } from '../components/list-numero/list-numero.component';
import { ListHistorialComponent } from '../components/list-historial/list-historial.component';
import { ListMultiploComponent } from '../components/list-multiplo/list-multiplo.component';

@Component({
  selector: 'app-multiplos',
  templateUrl: './multiplos.page.html',
  styleUrls: ['./multiplos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    InputNumeroComponent,
    ListNumeroComponent,
    ListHistorialComponent,
    ListMultiploComponent,
    IonCol,
    IonGrid,
    IonRow,
    IonLabel,
    IonButton,
  ],
})
export class MultiplosPage implements OnInit {
  numeroDeResultados$: Observable<number> = EMPTY;
  resultadosHistorial$: Observable<number[]> = EMPTY;

  mostrarHistorial: boolean = false;
  mostrarAgrupado: boolean = false;

  // Lista general de multiplos a validar
  multiplosLista: { multiplo: number; color: string }[] = [
    { multiplo: 3, color: '#1d5a1ddb' }, // verde
    { multiplo: 5, color: '#bb3131' }, // rojo
    { multiplo: 7, color: '#1239a2' }, // azul
  ];
  // Arreglo que almacenará los números del 0 a N
  numerosGenerados: number[] = [];
  // Arreglo de objetos de los números validados con por su múltiplo
  multiplosGenerados: {
    numero: number;
    color: string;
    multiplos: number[];
  }[] = [];

  constructor(private dbService: DatabaseService) {}

  // Generar la lista completa del 0 al número que ingresó el usuario
  generarNumeros(numero: number, isHistorial: boolean) {
    // Validación del lo que se recibe
    if (numero === null || isNaN(numero)) {
      this.numerosGenerados = [];
      return; // No hacer nada cuando no es válido lo ingresado
    }

    // LLamada a función para llenado de lista
    this.numerosGenerados = llenarLista(0, numero, 1);
    // Generación del arreglo de objetos encontrando los múltiplos de cada número del arreglo numerosGenerados
    this.obtenerMultiplos(this.numerosGenerados, isHistorial);
  }

  // Revisión de los números en la lista para verificar cuál es múltiplo de cúal
  obtenerMultiplos(listaNumeros: number[], isHistorial: boolean) {
    this.multiplosGenerados = []; // Resetear

    for (const num of listaNumeros) {
      // Verificar contra 3, 5, 7
      for (let i = 0; i < this.multiplosLista.length; i++) {
        let multiplo = this.multiplosLista[i].multiplo;
        if (num % multiplo === 0) this.agregarMultiplo(num, multiplo);
        else this.agregarMultiplo(num, 0.1);
      }
    }

    if (!isHistorial) {
      this.guardarMiData();
    }
  }

  // Creación o llenaro de nuevos valores en el arreglo de objetos
  agregarMultiplo(numero: number, multiplo: number) {
    // Buscar si el número ya existe
    const existeNumero = this.multiplosGenerados.find(
      (item: { numero: any }) => item.numero === numero
    );

    if (existeNumero) {
      // Evitar duplicados en multiplos
      if (!existeNumero.multiplos.includes(multiplo) && multiplo !== 0.1) {
        existeNumero.multiplos.push(multiplo);
        // Re-asignar color según el menor múltiplo (prioridad 3 > 5 > 7)
        existeNumero.color = determinarColor(
          existeNumero.multiplos,
          this.multiplosLista
        );
      }
    } else {
      // Crear nuevo registro
      this.multiplosGenerados.push({
        numero,
        color: getColorPorMultiplo(multiplo, this.multiplosLista),
        multiplos: multiplo !== 0.1 ? [multiplo] : [],
      });
    }
  }

  setNuevoHistorial(numero: any) {
    this.generarNumeros(numero, true);
    this.fncMostrarHistorial();
  }

  // Mostrar/ocultar lista de historial
  fncMostrarHistorial() {
    this.mostrarHistorial = !this.mostrarHistorial;
  }

  // Mostrar/ocultar lista agrupada por múltiplos
  fncMostrarListaAgrupada() {
    this.mostrarAgrupado = !this.mostrarAgrupado;
  }

  // Manda a llamar la función para enviar a FireBase
  guardarMiData() {
    this.dbService.guardarResultados(this.multiplosGenerados);
  }

  ngOnInit() {
    if (this.multiplosGenerados.length > 0) {
      this.multiplosGenerados = [];
    }
    this.numeroDeResultados$ = this.dbService.obtenerNumeroDeResultados();
    this.resultadosHistorial$ = this.dbService.obtenerHistorial();
  }
}

// Función para llenar lista con números incrementando
function llenarLista(inicio: number, fin: number, incremento = 1): number[] {
  const resultado = [];
  if (fin == 0) {
    resultado.push(0);
  } else if (fin > 0) {
    for (let i = inicio; i <= fin; i += incremento) {
      resultado.push(i);
    }
  } else if (fin < 0) {
    for (let i = inicio; i >= fin; i -= incremento) {
      resultado.push(i);
    }
  }
  return resultado;
}

function getColorPorMultiplo(
  multiplo: number,
  multiplosLista: { multiplo: number; color: string }[]
): string {
  const encontrado = multiplosLista.find((item) => item.multiplo === multiplo);
  return encontrado?.color || '#000000'; // Si no existe, devuelve el color 'negro'
}

function determinarColor(
  multiplos: number[],
  multiplosLista: { multiplo: number; color: string }[]
): string {
  const [menor] = [...multiplos].sort((a, b) => a - b);
  return menor === 3
    ? getColorPorMultiplo(3, multiplosLista)
    : menor === 5
    ? getColorPorMultiplo(5, multiplosLista)
    : getColorPorMultiplo(7, multiplosLista);
}
