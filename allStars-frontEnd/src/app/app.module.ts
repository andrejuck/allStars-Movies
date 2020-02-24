import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelecaoFilmesComponent } from './selecao-filmes/selecao-filmes.component';
import { FilmeComponent } from './selecao-filmes/filme/filme.component';
import { ResultadoFinalComponent } from './resultado-final/resultado-final.component';
import { VencedoresComponent } from './resultado-final/vencedores/vencedores.component';
import { TrofeuDirective } from './resultado-final/vencedores/trofeu.directive';
import { FilmesService } from './shared/services/filmes.service';

@NgModule({
  declarations: [
    AppComponent,
    SelecaoFilmesComponent,
    FilmeComponent,
    ResultadoFinalComponent,
    VencedoresComponent,
    TrofeuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
