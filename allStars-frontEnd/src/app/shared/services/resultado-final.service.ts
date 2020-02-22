import { Injectable } from '@angular/core';
import { ResultadoFinalModel } from '../model/resultado-final.model';


@Injectable({
  providedIn: 'root'
})
export class ResultadoFinalService {

  public resultado: ResultadoFinalModel[] = [
    new ResultadoFinalModel(1, 'Vingadores: Guerra Infinita', 8.8),
    new ResultadoFinalModel(2, 'Deadpool 2', 8.2),
    new ResultadoFinalModel(3, 'Superfly', 5.1)
  ];

  constructor() { }

  public getResultadoFinal() {
    return this.resultado.slice();
  }
}
