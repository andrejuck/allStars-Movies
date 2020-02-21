import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecaoFilmesComponent } from './selecao-filmes/selecao-filmes.component';
import { ResultadoFinalComponent } from './resultado-final/resultado-final.component';


const routes: Routes = [
  { path: '', redirectTo: '/selecao', pathMatch: 'full' },
  { path: 'selecao', component: SelecaoFilmesComponent },
  { path: 'resultado-final', component: ResultadoFinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
