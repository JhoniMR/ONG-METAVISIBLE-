import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BellezaPageRoutingModule } from './belleza-routing.module';

import { BellezaPage } from './belleza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BellezaPageRoutingModule
  ],
  declarations: [BellezaPage]
})
export class BellezaPageModule {}
