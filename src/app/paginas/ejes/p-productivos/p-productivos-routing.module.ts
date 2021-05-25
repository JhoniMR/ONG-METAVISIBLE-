import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PProductivosPage } from './p-productivos.page';

const routes: Routes = [
  {
    path: '',
    component: PProductivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PProductivosPageRoutingModule {}
