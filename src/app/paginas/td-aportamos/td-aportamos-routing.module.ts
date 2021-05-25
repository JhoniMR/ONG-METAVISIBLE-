import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdAportamosPage } from './td-aportamos.page';

const routes: Routes = [
  {
    path: '',
    component: TdAportamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TdAportamosPageRoutingModule {}
