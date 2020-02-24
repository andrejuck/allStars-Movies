import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmesService } from '../shared/services/filmes.service';
import { FilmeModel } from '../shared/model/filme.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selecao-filmes',
  templateUrl: './selecao-filmes.component.html',
  styleUrls: ['./selecao-filmes.component.css']
})
export class SelecaoFilmesComponent implements OnInit, OnDestroy {

  private filmes: Array<FilmeModel>;
  private rows = [];
  private checkedItems: number = 0;
  subscription: Subscription;
  constructor(public service: FilmesService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.service
      .getFilmesApi()
      .subscribe(filmes => {
        this.rows = this.groupColumns(filmes);
        this.filmes = filmes;
      });
  }

  groupColumns(filmes: FilmeModel[]) {
    const newRows = [];

    for (let index = 0; index < filmes.length; index += 4) {
      newRows.push(filmes.slice(index, index + 4))
    }
    return newRows;
  }

  onChecked(checked: boolean) {
    if (checked) {
      if (this.checkedItems < 8)
        this.checkedItems++;
    }
    else
      this.checkedItems--;
  }

  onGerarCampeonatoClick() {
    const filmesSelecionados = this.filmes.filter(x => x.checked);

    if (filmesSelecionados.length !== 8)
      alert("Por favor selecionar 8 filmes");
    else
      this.service.filmesSelecionados = filmesSelecionados;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
