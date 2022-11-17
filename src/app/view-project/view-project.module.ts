import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewProjectPage } from './view-project.page';

import { IonicModule } from '@ionic/angular';

import { ViewProjectPageRoutingModule } from './view-project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProjectPageRoutingModule
  ],
  declarations: [ViewProjectPage]
})
export class ViewProjectPageModule {}
