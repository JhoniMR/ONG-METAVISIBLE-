import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SasPageRoutingModule } from './sas-routing.module';

import { SasPage } from './sas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SasPageRoutingModule
  ],
  declarations: [SasPage]
})
export class SasPageModule {}
