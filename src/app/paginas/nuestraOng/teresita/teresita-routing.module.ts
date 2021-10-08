import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeresitaPage } from './teresita.page';

const routes: Routes = [
  {
    path: '',
    component: TeresitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeresitaPageRoutingModule {}
