import { Injectable } from '@angular/core';
import { Filme } from '../shared/model/filme/filme.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  public filmes: Array<Filme> = [
    new Filme("tt3606756", "Os Incríveis 2", 2018, 8.5),
    new Filme("tt4881806", "Jurassic World: Reino Ameaçado", 2018, 6.7),
    new Filme("tt5164214", "Oito Mulheres e um Segredo", 2018, 6.3),
    new Filme("tt7784604", "Hereditário", 2018, 7.8),
    new Filme("tt4154756", "Vingadores: Guerra Infinita", 2018, 8.8),
    new Filme("tt5463162", "Deadpool 2", 2018, 8.1),
    new Filme("tt3778644", "Han Solo: Uma História Star Wars", 2018, 7.2),
    new Filme("tt3501632", "Thor: Ragnarok", 2017, 7.9),
    new Filme("tt2854926", "Te Peguei!", 2018, 7.1),
    new Filme("tt0317705", "Os Incríveis", 2004, 8.0),
    new Filme("tt3799232", "A Barraca do Beijo", 2018, 6.4),
    new Filme("tt1365519", "Tomb Raider: A Origem", 2018, 6.5),
    new Filme("tt1825683", "Pantera Negra", 2018, 7.5),
    new Filme("tt5834262", "Hotel Artemis", 2018, 6.3),
    new Filme("tt7690670", "Superfly", 2018, 5.1),
    new Filme("tt6499752", "Upgrade", 2018, 7.8)
  ];
  private url: string = 'http://copafilmes.azurewebsites.net/api/filmes';
  constructor(private http: HttpClient) {

  }
  public getFilmes() {
    return this.filmes.slice();
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
