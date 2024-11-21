import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracteristicasPageRoutingModule } from './caracteristicas-routing.module';

import { CaracteristicasPage } from './caracteristicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracteristicasPageRoutingModule
  ],
  declarations: [CaracteristicasPage]
})
export class CaracteristicasPageModule {}
