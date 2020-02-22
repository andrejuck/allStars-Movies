import { Injectable } from '@angular/core';
import { FilmeModel } from '../model/filme.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  public filmes: Array<FilmeModel> = [
    new FilmeModel("tt3606756", "Os Incríveis 2", 2018, 8.5),
    new FilmeModel("tt4881806", "Jurassic World: Reino Ameaçado", 2018, 6.7),
    new FilmeModel("tt5164214", "Oito Mulheres e um Segredo", 2018, 6.3),
    new FilmeModel("tt7784604", "Hereditário", 2018, 7.8),
    new FilmeModel("tt4154756", "Vingadores: Guerra Infinita", 2018, 8.8),
    new FilmeModel("tt5463162", "Deadpool 2", 2018, 8.1),
    new FilmeModel("tt3778644", "Han Solo: Uma História Star Wars", 2018, 7.2),
    new FilmeModel("tt3501632", "Thor: Ragnarok", 2017, 7.9),
    new FilmeModel("tt2854926", "Te Peguei!", 2018, 7.1),
    new FilmeModel("tt0317705", "Os Incríveis", 2004, 8.0),
    new FilmeModel("tt3799232", "A Barraca do Beijo", 2018, 6.4),
    new FilmeModel("tt1365519", "Tomb Raider: A Origem", 2018, 6.5),
    new FilmeModel("tt1825683", "Pantera Negra", 2018, 7.5),
    new FilmeModel("tt5834262", "Hotel Artemis", 2018, 6.3),
    new FilmeModel("tt7690670", "Superfly", 2018, 5.1),
    new FilmeModel("tt6499752", "Upgrade", 2018, 7.8)
  ];
  private url: string = 'https://copafilmes.azurewebsites.net/api/filmes';
  constructor(private http: HttpClient) {

  }
  public getFilmes() {
    return this.filmes
    .slice();
  }
  // public getFilmes() {
  //   return this.http
  //   .get(this.url)
  //   .pipe(map(responseData => {
  //     const postsArray = [];
  //     for (const key in responseData) {
  //       if(responseData.hasOwnProperty(key)){

  //         postsArray.push({ ...responseData[key]})
  //       }
  //     }
  //   }))
  //   .subscribe(teste => {
  //     console.log(teste)
  //   })
  // }
}
