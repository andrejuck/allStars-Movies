import { Component, OnInit, Input } from '@angular/core';
import { Filme } from 'src/app/shared/model/filme/filme.model';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() filme: Filme;
  constructor() { }

  ngOnInit() {
  }

}
