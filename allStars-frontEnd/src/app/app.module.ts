import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelecaoFilmesComponent } from './selecao-filmes/selecao-filmes.component';
import { FilmeComponent } from './selecao-filmes/filme/filme.component';

@NgModule({
  declarations: [
    AppComponent,
    SelecaoFilmesComponent,
    FilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
