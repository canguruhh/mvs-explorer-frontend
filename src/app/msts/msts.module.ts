import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MstsPage } from './msts.page';
import { MstItemComponent } from './mst-item/mst-item.component';

const routes: Routes = [
  {
    path: '',
    component: MstsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MstsPage,
    MstItemComponent
  ]
})
export class MstsPageModule {}
