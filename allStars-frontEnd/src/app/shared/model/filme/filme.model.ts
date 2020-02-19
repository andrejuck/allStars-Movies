import { VirtualTimeScheduler } from 'rxjs';

export class Filme {
  public id: string;
  public titulo: string;
  public ano: number;
  public nota: number;

  constructor(id: string, titulo: string, ano: number, nota:number ) {
    this.ano = ano;
    this.id = id;
    this.titulo = titulo;
    this.nota = nota;    
  }
}