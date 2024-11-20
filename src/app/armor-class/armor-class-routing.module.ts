import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmorClassPage } from './armor-class.page';

const routes: Routes = [
  {
    path: ':playerId/:avatar',
    component: ArmorClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmorClassPageRoutingModule {}

  