import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienestaranimalPageRoutingModule } from './bienestaranimal-routing.module';

import { BienestaranimalPage } from './bienestaranimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienestaranimalPageRoutingModule
  ],
  declarations: [BienestaranimalPage]
})
export class BienestaranimalPageModule {}
