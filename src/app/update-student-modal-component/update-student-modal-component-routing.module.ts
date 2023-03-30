import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateStudentModalComponentPage } from './update-student-modal-component.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateStudentModalComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateStudentModalComponentPageRoutingModule {}
