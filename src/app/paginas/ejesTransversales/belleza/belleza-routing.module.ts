import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BellezaPage } from './belleza.page';

const routes: Routes = [
  {
    path: '',
    component: BellezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BellezaPageRoutingModule {}
