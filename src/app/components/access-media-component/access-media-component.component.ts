import { Component, OnInit } from '@angular/core';
import { AccessMediaService } from '../../services/access-media-service/access.media.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-access-media-component',
  templateUrl: './access-media-component.component.html',
  styleUrls: ['./access-media-component.component.css']
})
export class AccessMediaComponentComponent implements OnInit {
  accessMedia: ListaDeDescuentosLimitadasDeTarifa [] = [];
  listAux: any [] = []
  event: any = {
    pasajeroId: 0,
    limite1: 0,
    definicionDiaria: "",
    limite2: 0,
    definicionSemanal: 0,
    limite3: 0,
    definicionMensual: 0,
  }

  constructor(private ams:AccessMediaService) { 
    this.accessMedia = ams.getAll()
    this.listAux = this.tabla()
    console.dir(this.listAux)
  }

  ngOnInit(): void {
  }

  tabla(){
    let aux = _.orderBy(this.accessMedia, ['pasajeroId','tipoPeriodo'], ['asc','asc'])
    let listReturn: any [] = []

    for (let index = 0; index < aux.length; index++) {
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
          console.log(this.event)
          let c = new Aux(this.event.pasajeroId, this.event.limite1, this.event.definicionDiaria, this.event.limite2, this.event.definicionSemanal, this.event.limite3, this.event.definicionMensual)
          listReturn.push(c)
        }
      }
    }
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