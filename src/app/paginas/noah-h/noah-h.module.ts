import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoahHPageRoutingModule } from './noah-h-routing.module';

import { NoahHPage } from './noah-h.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoahHPageRoutingModule
  ],
  declarations: [NoahHPage]
})
export class NoahHPageModule {}
