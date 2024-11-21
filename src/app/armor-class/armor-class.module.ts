import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmorClassPageRoutingModule } from './armor-class-routing.module';

import { ArmorClassPage } from './armor-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmorClassPageRoutingModule
  ],
  declarations: [ArmorClassPage]
})
export class ArmorClassPageModule {}
