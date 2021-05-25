import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CjhrSasPage } from './cjhr-sas.page';

const routes: Routes = [
  {
    path: '',
    component: CjhrSasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CjhrSasPageRoutingModule {}
