import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'update-student-modal-component',
    loadChildren: () => import('./update-student-modal-component/update-student-modal-component.module').then( m => m.UpdateStudentModalComponentPageModule)
  },
  {
    path: 'open-add-modal',
    loadChildren: () => import('./open-add-modal/open-add-modal.module').then( m => m.OpenAddModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
