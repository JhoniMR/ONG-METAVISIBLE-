import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestraOngPageRoutingModule } from './nuestra-ong-routing.module';

import { NuestraOngPage } from './nuestra-ong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestraOngPageRoutingModule
  ],
  declarations: [NuestraOngPage]
})
export class NuestraOngPageModule {}
