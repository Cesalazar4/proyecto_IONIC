import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigJugadorPage } from './config-jugador.page';

const routes: Routes = [
  {
    path: ':id',
    component: ConfigJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigJugadorPageRoutingModule {}
