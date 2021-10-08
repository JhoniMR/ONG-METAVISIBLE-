import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasaiPageRoutingModule } from './casai-routing.module';

import { CasaiPage } from './casai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasaiPageRoutingModule
  ],
  declarations: [CasaiPage]
})
export class CasaiPageModule {}
