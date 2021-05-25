import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeresitacorazonPageRoutingModule } from './teresitacorazon-routing.module';

import { TeresitacorazonPage } from './teresitacorazon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeresitacorazonPageRoutingModule
  ],
  declarations: [TeresitacorazonPage]
})
export class TeresitacorazonPageModule {}
