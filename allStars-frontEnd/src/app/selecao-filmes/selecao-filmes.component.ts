import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FilmesService } from '../shared/services/filmes.service';
import { FilmeModel } from '../shared/model/filme.model';

@Component({
  selector: 'app-selecao-filmes',
  templateUrl: './selecao-filmes.component.html',
  styleUrls: ['./selecao-filmes.component.css'],
  providers: [FilmesService]
})
export class SelecaoFilmesComponent implements OnInit {

  private filmes: Array<FilmeModel>;
  private rows = [];
  private checkedItems: number = 0;
  constructor(private service: FilmesService) { }

  ngOnInit() {
    this.filmes = this.service.getFilmes();
    // this.service.getFilmes();
    if (this.filmes.length > 0) {
      this.rows = this.groupColumns(this.filmes);
    }
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

  onGerarCampeonatoClick(data) {
    const filmesSelecionados = this.filmes.filter(x => x.checked);

    if (filmesSelecionados.length !== 8)
      alert("Por favor selecionar 8 filmes")
    else
      console.log(filmesSelecionados)
  }
}
