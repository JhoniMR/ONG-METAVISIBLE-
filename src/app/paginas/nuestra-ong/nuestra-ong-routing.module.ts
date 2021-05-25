import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestraOngPage } from './nuestra-ong.page';

const routes: Routes = [
  {
    path: '',
    component: NuestraOngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestraOngPageRoutingModule {}
