import { Component, OnInit } from '@angular/core';
import { AccessMediaService } from '../../services/access-media-service/access.media.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-access-media-component',
  templateUrl: './access-media.component.html',
  styleUrls: ['./access-media.component.css']
})


export class AccessMediaComponent implements OnInit {
  //Variables
  accessMedia: ListaDeDescuentosLimitadasDeTarifa [] = [];
  listAux: any [] = []
  //Tiene la estructura de la tabla a como se va a mostrar. 
  event: any = {
    pasajeroId: 0,
    limite1: 0,
    definicionDiaria: "",
    limite2: 0,
    definicionSemanal: 0,
    limite3: 0,
    definicionMensual: 0,
  }

  //Recibe JSON con todos los elementos y se asigna el llamado a la función que arma la lógica con el JSON ordenado.
  constructor(private ams:AccessMediaService) { 
    this.accessMedia = ams.getAll()
    this.listAux = this.tabla()
  }

  ngOnInit(): void {
  }

  //Función lógica que permite resolver ejercicio 4.
  tabla(){
    //Ordena la lista original.
    let aux = _.orderBy(this.accessMedia, ['pasajeroId','tipoPeriodo'], ['asc','asc'])
    let listReturn: any [] = []

    //Recorre todos los elementos de la lista.
    for (let index = 0; index < aux.length; index++) {
      //Se arma elementos según la estructura de la tabla por ID pasajero.
      if(this.event.pasajeroId != aux[index].pasajeroId){
        if(aux[index].tipoPeriodo == 1){
          this.event.pasajeroId = aux[index].pasajeroId
          this.event.limite1 = aux[index].limite
          this.event.definicionDiaria = aux[index].definicionDiaria
        }
      }else{
        if(aux[index].tipoPeriodo == 2){
          this.event.limite2 = aux[index].limite
          this.event.definicionSemanal = aux[index].definicionSemanal
        }else if(aux[index].tipoPeriodo == 3){
          this.event.limite3 = aux[index].limite
          this.event.definicionMensual = aux[index].definicionMensual
          //Una vez conformada la estructura, uso la clase auxiliar con su constructor para poder inserta el elemento que deseo a mostrar.
          //No me devuelve sólo el último pasajero, crea un objeto por cada pasajero al ejecutar "new".
          let c = new Aux(this.event.pasajeroId, this.event.limite1, this.event.definicionDiaria, this.event.limite2, this.event.definicionSemanal, this.event.limite3, this.event.definicionMensual)
          //Se agrega a la lista a devolver con los elementos de la estructura de la tabla a mostrar.
          listReturn.push(c)
        }
      }
    }
    //Devuelve lista con los elementos a mostrar.
    return listReturn
  }

}


export interface ListaDeDescuentosLimitadasDeTarifa {
  tipoPeriodo: number;
  limite: number;
  definicionDiaria: string;
  definicionSemanal: number;
  definicionMensual: number;
  pasajeroId: number;
}


//Clase auxiliar utilizada para que genere un objeto por cada vez que logra armar según lógica.
//Y se agrega a la lista siempre uno distinto (según ID del pasajero).
class Aux{

  pasajeroId: number
  limite1: number
  definicionDiaria: string
  limite2: number
  definicionSemanal: number
  limite3: number
  definicionMensual: number

  constructor(pasajeroId: number, limite1: number, definicionDiaria: string, limite2: number, definicionSemanal: number, limite3: number, definicionMensual: number){
    this.pasajeroId = pasajeroId
    this.limite1 = limite1
    this.definicionDiaria = definicionDiaria
    this.limite2 = limite2
    this.definicionSemanal = definicionSemanal
    this.limite3 = limite3
    this.definicionMensual = definicionMensual
  }
}