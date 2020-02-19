import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';
import { Filme } from '../shared/model/filme/filme.model';

@Component({
  selector: 'app-selecao-filmes',
  templateUrl: './selecao-filmes.component.html',
  styleUrls: ['./selecao-filmes.component.css']
})
export class SelecaoFilmesComponent implements OnInit {

  private filmes:Array<Filme>;
  private rows = [];
  constructor(private service:FilmesService) { }

  ngOnInit() {
    this.filmes = this.service.getFilmes();
    if(this.filmes.length > 0){
      this.rows = this.groupColumns(this.filmes);
    }
  }

  groupColumns(filmes: Filme[]){
    const newRows =[];

    for(let index = 0; index < filmes.length; index += 4){
      newRows.push(filmes.slice(index, index + 4))
    }
    return newRows;
  }
}
