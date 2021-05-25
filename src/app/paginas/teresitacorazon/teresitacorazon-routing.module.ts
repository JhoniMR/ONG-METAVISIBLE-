import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeresitacorazonPage } from './teresitacorazon.page';

const routes: Routes = [
  {
    path: '',
    component: TeresitacorazonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeresitacorazonPageRoutingModule {}
