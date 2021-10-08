import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjesmenuPageRoutingModule } from './ejesmenu-routing.module';

import { EjesmenuPage } from './ejesmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjesmenuPageRoutingModule
  ],
  declarations: [EjesmenuPage]
})
export class EjesmenuPageModule {}
