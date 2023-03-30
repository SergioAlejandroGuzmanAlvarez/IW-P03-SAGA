import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenAddModalPageRoutingModule } from './open-add-modal-routing.module';

import { OpenAddModalPage } from './open-add-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenAddModalPageRoutingModule
  ],
  declarations: [OpenAddModalPage]
})
export class OpenAddModalPageModule {}
