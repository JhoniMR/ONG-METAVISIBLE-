import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CjhrSasPageRoutingModule } from './cjhr-sas-routing.module';

import { CjhrSasPage } from './cjhr-sas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CjhrSasPageRoutingModule
  ],
  declarations: [CjhrSasPage]
})
export class CjhrSasPageModule {}
