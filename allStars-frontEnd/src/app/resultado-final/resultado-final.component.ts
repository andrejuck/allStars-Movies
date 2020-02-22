import { Component, OnInit } from '@angular/core';
import { ResultadoFinalModel } from '../shared/model/resultado-final.model';
import { ResultadoFinalService } from '../shared/services/resultado-final.service';

@Component({
  selector: 'app-resultado-final',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.css'],
  providers: [ResultadoFinalService]
})
export class ResultadoFinalComponent implements OnInit {

  
  private resultado:ResultadoFinalModel[];
  constructor(private resultadoService: ResultadoFinalService) { }

  ngOnInit() {
    this.resultado = this.resultadoService.getResultadoFinal();
  }

}
