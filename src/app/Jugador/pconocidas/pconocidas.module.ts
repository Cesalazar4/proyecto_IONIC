import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PconocidasPageRoutingModule } from './pconocidas-routing.module';

import { PconocidasPage } from './pconocidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PconocidasPageRoutingModule
  ],
  declarations: [PconocidasPage]
})
export class PconocidasPageModule {}
