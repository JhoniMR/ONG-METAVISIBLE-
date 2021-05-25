import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BAnimalPageRoutingModule } from './b-animal-routing.module';

import { BAnimalPage } from './b-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BAnimalPageRoutingModule
  ],
  declarations: [BAnimalPage]
})
export class BAnimalPageModule {}
