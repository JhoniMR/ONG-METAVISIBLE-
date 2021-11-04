import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    loadChildren: () => import('./paginas/feed/feed.module').then( m => m.FeedPageModule)
  },
  



  {
    path: 'menu',
    loadChildren: () => import('./paginas/nuestraOng/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'teresita',
    loadChildren: () => import('./paginas/nuestraOng/teresita/teresita.module').then( m => m.TeresitaPageModule)
  },
  {
    path: 'belleza',
    loadChildren: () => import('./paginas/nuestraOng/belleza/belleza.module').then( m => m.BellezaPageModule)
  },
  {
    path: 'casai',
    loadChildren: () => import('./paginas/nuestraOng/casai/casai.module').then( m => m.CasaiPageModule)
  },
  {
    path: 'pendulo',
    loadChildren: () => import('./paginas/nuestraOng/pendulo/pendulo.module').then( m => m.PenduloPageModule)
  },

  {
    path: 'todosaportamos',
    loadChildren: () => import('./paginas/nuestraOng/todos-aportamos/todos-aportamos.module').then( m => m.TodosAportamosPageModule)
  },

  {
    path: 'sas',
    loadChildren: () => import('./paginas/nuestraOng/sas/sas.module').then( m => m.SasPageModule)
  },
  {
    path: 'noah',
    loadChildren: () => import('./paginas/nuestraOng/noah/noah.module').then( m => m.NoahPageModule)
  },






  
  {
    path: 'ejesbelleza',
    loadChildren: () => import('./paginas/ejesTransversales/belleza/belleza.module').then( m => m.BellezaPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./paginas/ejesTransversales/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'ejesmenu',
    loadChildren: () => import('./paginas/ejesTransversales/ejesmenu/ejesmenu.module').then( m => m.EjesmenuPageModule)
  },
  {
    path: 'recreacion',
    loadChildren: () => import('./paginas/ejesTransversales/recreacion/recreacion.module').then( m => m.RecreacionPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./paginas/ejesTransversales/proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'bienestaranimal',
    loadChildren: () => import('./paginas/ejesTransversales/bienestaranimal/bienestaranimal.module').then( m => m.BienestaranimalPageModule)
  },
  {
    path: 'reforestacion',
    loadChildren: () => import('./paginas/ejesTransversales/reforestacion/reforestacion.module').then( m => m.ReforestacionPageModule)
  },
  {
    path: 'infraestructura',
    loadChildren: () => import('./paginas/ejesTransversales/infraestructura/infraestructura.module').then( m => m.InfraestructuraPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./paginas/actividades/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },  {
    path: 'beneficios',
    loadChildren: () => import('./paginas/beneficios/beneficios/beneficios.module').then( m => m.BeneficiosPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./paginas/chat/chat.module').then( m => m.ChatPageModule)
  },



 



  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
