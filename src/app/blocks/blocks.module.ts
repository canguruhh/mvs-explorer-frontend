import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlocksPage } from './blocks.page';
import { BlockItemComponent } from './block-item/block-item.component';

const routes: Routes = [
  {
    path: '',
    component: BlocksPage
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
    BlocksPage,
    BlockItemComponent
  ]
})
export class BlocksPageModule {}
