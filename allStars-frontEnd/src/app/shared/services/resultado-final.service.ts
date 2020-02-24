import { Injectable } from '@angular/core';
import { ResultadoFinalModel } from '../model/resultado-final.model';
import { FilmeModel } from '../model/filme.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultadoFinalService {

  private url: string = 'https://localhost:44354/api/resultadofinal';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public resultado: ResultadoFinalModel[] = [
    new ResultadoFinalModel(1, 'Vingadores: Guerra Infinita', 8.8),
    new ResultadoFinalModel(2, 'Deadpool 2', 8.2),
    new ResultadoFinalModel(3, 'Superfly', 5.1)
  ];

  constructor(private http: HttpClient) { }

  public postFilmesCampeonato(filmesSelecionados: FilmeModel[]) {
    return this.http
      .post<FilmeModel[]>(this.url, filmesSelecionados, this.httpOptions);
  }
}
