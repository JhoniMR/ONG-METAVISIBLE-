import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'ejes',
    loadChildren: () => import('./paginas/ejes/ejes.module').then( m => m.EjesPageModule)
  },
  {
    path: 'facturas',
    loadChildren: () => import('./paginas/facturas/facturas.module').then( m => m.FacturasPageModule)
  },
  {
    path: 'belleza',
    loadChildren: () => import('./paginas/belleza/belleza.module').then( m => m.BellezaPageModule)
  },
  {
    path: 'teresitacorazon',
    loadChildren: () => import('./paginas/teresitacorazon/teresitacorazon.module').then( m => m.TeresitacorazonPageModule)
  },
  {
    path: 'pendulo',
    loadChildren: () => import('./paginas/pendulo/pendulo.module').then( m => m.PenduloPageModule)
  },
  {
    path: 'td-aportamos',
    loadChildren: () => import('./paginas/td-aportamos/td-aportamos.module').then( m => m.TdAportamosPageModule)
  },
  {
    path: 'cjhr-sas',
    loadChildren: () => import('./paginas/cjhr-sas/cjhr-sas.module').then( m => m.CjhrSasPageModule)
  },
  {
    path: 'noah-h',
    loadChildren: () => import('./paginas/noah-h/noah-h.module').then( m => m.NoahHPageModule)
  },
  {
    path: 'casai',
    loadChildren: () => import('./paginas/casai/casai.module').then( m => m.CasaiPageModule)
  },
  {
    path: 'nuestra-ong',
    loadChildren: () => import('./paginas/nuestra-ong/nuestra-ong.module').then( m => m.NuestraOngPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./paginas/feed/feed.module').then( m => m.FeedPageModule)
  },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
