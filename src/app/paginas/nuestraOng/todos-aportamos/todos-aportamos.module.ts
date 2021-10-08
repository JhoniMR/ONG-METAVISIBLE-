import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosAportamosPageRoutingModule } from './todos-aportamos-routing.module';

import { TodosAportamosPage } from './todos-aportamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosAportamosPageRoutingModule
  ],
  declarations: [TodosAportamosPage]
})
export class TodosAportamosPageModule {}
