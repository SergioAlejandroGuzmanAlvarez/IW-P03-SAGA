import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStudentModalComponentPageRoutingModule } from './update-student-modal-component-routing.module';

import { UpdateStudentModalComponentPage } from './update-student-modal-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStudentModalComponentPageRoutingModule
  ],
  declarations: [UpdateStudentModalComponentPage]
})
export class UpdateStudentModalComponentPageModule {}
