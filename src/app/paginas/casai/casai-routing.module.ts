import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasaiPage } from './casai.page';

const routes: Routes = [
  {
    path: '',
    component: CasaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasaiPageRoutingModule {}
