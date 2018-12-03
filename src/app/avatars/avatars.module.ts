import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvatarsPage } from './avatars.page';
import { AvatarItemComponent } from './avatar-item/avatar-item.component';

const routes: Routes = [
  {
    path: '',
    component: AvatarsPage
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
    AvatarsPage,
    AvatarItemComponent
  ]
})
export class AvatarsPageModule {}
