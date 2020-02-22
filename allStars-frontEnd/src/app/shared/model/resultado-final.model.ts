export class ResultadoFinalModel {
    public posicao: number;
    public titulo: string;
    public nota: number;

    constructor(posicao: number, titulo: string, nota: number) {
        this.posicao = posicao;
        this.titulo = titulo;
        this.nota = nota;
    }
}