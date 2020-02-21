import { VirtualTimeScheduler } from 'rxjs';

export class Filme {
  public id: string;
  public titulo: string;
  public ano: number;
  public nota: number;
  public checked: boolean;

  constructor(id: string, titulo: string, ano: number, nota:number, checked:boolean = false ) {
    this.ano = ano;
    this.id = id;
    this.titulo = titulo;
    this.nota = nota;   
    this.checked = checked; 
  }
}