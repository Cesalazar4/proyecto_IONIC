import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracteristicasPage } from './caracteristicas.page';

const routes: Routes = [
  {
    path: '',
    component: CaracteristicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracteristicasPageRoutingModule {}
