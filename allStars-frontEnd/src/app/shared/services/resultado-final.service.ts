import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  public postFilmesCampeonato(filmesSelecionados: FilmeModel[]) {
    return this.http
      .post<FilmeModel[]>(this.url, filmesSelecionados);
  }
}
