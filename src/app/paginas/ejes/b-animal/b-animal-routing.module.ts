import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BAnimalPage } from './b-animal.page';

const routes: Routes = [
  {
    path: '',
    component: BAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BAnimalPageRoutingModule {}
