import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LatestBlocksComponent } from './latest-blocks/latest-blocks.component';
import { BlockItemComponent } from './block-item/block-item.component';
import { HomePage } from './home.page';

import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    LatestBlocksComponent,
    BlockItemComponent,
  ]
})
export class HomePageModule { }
