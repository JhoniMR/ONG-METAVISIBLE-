import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoahHPage } from './noah-h.page';

const routes: Routes = [
  {
    path: '',
    component: NoahHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoahHPageRoutingModule {}
