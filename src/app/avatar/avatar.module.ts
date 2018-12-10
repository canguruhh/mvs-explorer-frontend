import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvatarPage } from './avatar.page';
import { AvatarInfoComponent } from './../avatar-info/avatar-info.component';
import { TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: AvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AvatarPage,
    AvatarInfoComponent
  ]
})
export class AvatarPageModule {}
