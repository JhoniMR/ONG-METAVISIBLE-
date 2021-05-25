import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenduloPageRoutingModule } from './pendulo-routing.module';

import { PenduloPage } from './pendulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenduloPageRoutingModule
  ],
  declarations: [PenduloPage]
})
export class PenduloPageModule {}
