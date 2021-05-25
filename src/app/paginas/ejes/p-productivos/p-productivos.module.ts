import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PProductivosPageRoutingModule } from './p-productivos-routing.module';

import { PProductivosPage } from './p-productivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PProductivosPageRoutingModule
  ],
  declarations: [PProductivosPage]
})
export class PProductivosPageModule {}
