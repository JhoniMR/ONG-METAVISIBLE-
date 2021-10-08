import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeresitaPageRoutingModule } from './teresita-routing.module';

import { TeresitaPage } from './teresita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeresitaPageRoutingModule
  ],
  declarations: [TeresitaPage]
})
export class TeresitaPageModule {}
