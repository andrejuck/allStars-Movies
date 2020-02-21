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

@NgModule({
  declarations: [
    AppComponent,
    SelecaoFilmesComponent,
    FilmeComponent,
    ResultadoFinalComponent,
    VencedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
