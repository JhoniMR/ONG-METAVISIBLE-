import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoahPageRoutingModule } from './noah-routing.module';

import { NoahPage } from './noah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoahPageRoutingModule
  ],
  declarations: [NoahPage]
})
export class NoahPageModule {}
