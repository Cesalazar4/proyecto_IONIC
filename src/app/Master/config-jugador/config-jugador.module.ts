import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigJugadorPageRoutingModule } from './config-jugador-routing.module';

import { ConfigJugadorPage } from './config-jugador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigJugadorPageRoutingModule
  ],
  declarations: [ConfigJugadorPage]
})
export class ConfigJugadorPageModule {}
