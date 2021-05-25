import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReforestacionPage } from './reforestacion.page';

const routes: Routes = [
  {
    path: '',
    component: ReforestacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReforestacionPageRoutingModule {}
