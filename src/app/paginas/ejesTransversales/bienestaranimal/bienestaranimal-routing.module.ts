import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienestaranimalPage } from './bienestaranimal.page';

const routes: Routes = [
  {
    path: '',
    component: BienestaranimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienestaranimalPageRoutingModule {}
