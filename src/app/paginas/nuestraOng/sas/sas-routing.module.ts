import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SasPage } from './sas.page';

const routes: Routes = [
  {
    path: '',
    component: SasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SasPageRoutingModule {}
