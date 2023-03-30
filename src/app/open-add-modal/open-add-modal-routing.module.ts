import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenAddModalPage } from './open-add-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OpenAddModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenAddModalPageRoutingModule {}
