import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoahPage } from './noah.page';

const routes: Routes = [
  {
    path: '',
    component: NoahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoahPageRoutingModule {}
