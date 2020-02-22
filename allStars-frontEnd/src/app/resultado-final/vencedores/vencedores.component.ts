import { Component, OnInit, Input } from '@angular/core';
import { ResultadoFinalModel } from 'src/app/shared/model/resultado-final.model';

@Component({
  selector: 'app-vencedores',
  templateUrl: './vencedores.component.html',
  styleUrls: ['./vencedores.component.css'],
})
export class VencedoresComponent implements OnInit {

  @Input()
  private vencedor:ResultadoFinalModel;

  constructor() { }

  ngOnInit() {
  }

}
