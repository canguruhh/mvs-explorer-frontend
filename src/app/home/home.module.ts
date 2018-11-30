import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LatestBlocksComponent } from './latest-blocks/latest-blocks.component';
import { BlockItemComponent } from './block-item/block-item.component';
import { SearchbarComponent } from './../searchbar/searchbar.component';
import { HomePage } from './home.page';
import { MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { MomentModule } from 'ngx-moment';
import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
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
    SearchbarComponent
  ]
})
export class HomePageModule { }
