import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TdAportamosPageRoutingModule } from './td-aportamos-routing.module';

import { TdAportamosPage } from './td-aportamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TdAportamosPageRoutingModule
  ],
  declarations: [TdAportamosPage]
})
export class TdAportamosPageModule {}
