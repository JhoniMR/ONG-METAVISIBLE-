import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjesPage } from './ejes.page';

const routes: Routes = [
  {
    path: '',
    component: EjesPage
  },
  {
    path: 'salud',
    loadChildren: () => import('./salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'belleza',
    loadChildren: () => import('./belleza/belleza.module').then( m => m.BellezaPageModule)
  },
  {
    path: 'recreacion',
    loadChildren: () => import('./recreacion/recreacion.module').then( m => m.RecreacionPageModule)
  },
  {
    path: 'p-productivos',
    loadChildren: () => import('./p-productivos/p-productivos.module').then( m => m.PProductivosPageModule)
  },
  {
    path: 'b-animal',
    loadChildren: () => import('./b-animal/b-animal.module').then( m => m.BAnimalPageModule)
  },
  {
    path: 'reforestacion',
    loadChildren: () => import('./reforestacion/reforestacion.module').then( m => m.ReforestacionPageModule)
  },
  {
    path: 'infraestructura',
    loadChildren: () => import('./infraestructura/infraestructura.module').then( m => m.InfraestructuraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjesPageRoutingModule {}
