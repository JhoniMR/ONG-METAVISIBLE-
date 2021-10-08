import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosAportamosPage } from './todos-aportamos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosAportamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosAportamosPageRoutingModule {}
