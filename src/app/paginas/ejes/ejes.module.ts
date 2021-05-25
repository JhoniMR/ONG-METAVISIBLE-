import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjesPageRoutingModule } from './ejes-routing.module';

import { EjesPage } from './ejes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjesPageRoutingModule
  ],
  declarations: [EjesPage]
})
export class EjesPageModule {}
