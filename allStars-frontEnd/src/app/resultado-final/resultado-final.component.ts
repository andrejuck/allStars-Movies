import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ResultadoFinalModel } from '../shared/model/resultado-final.model';
import { ResultadoFinalService } from '../shared/services/resultado-final.service';
import { FilmesService } from '../shared/services/filmes.service';
import { FilmeModel } from '../shared/model/filme.model';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-resultado-final',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.css']
})
export class ResultadoFinalComponent implements OnInit, OnDestroy {
  
  private resultado: ResultadoFinalModel[] = [];
  filmesSelecionados: FilmeModel[];
  subscription: Subscription;
  constructor(private resultadoService: ResultadoFinalService, public filmeService: FilmesService) { }

  ngOnInit() {
    this.filmesSelecionados = this.filmeService.filmesSelecionados;

    this.subscription = this.resultadoService.postFilmesCampeonato(this.filmeService.filmesSelecionados)
      .pipe(map(responseData => {
        let count = 1;
        for (const key in responseData) {
          this.resultado.push({ posicao: count, ...responseData[key] })
          count++;
        }
        console.log(this.resultado);
      }))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
