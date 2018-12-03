import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'avatars', loadChildren: './avatars/avatars.module#AvatarsPageModule' },
  { path: 'txs', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
  { path: 'blocks', loadChildren: './blocks/blocks.module#BlocksPageModule' },
  { path: 'msts', loadChildren: './msts/msts.module#MstsPageModule' },
  { path: 'assets', redirectTo: 'msts', pathMatch: 'full' },
  { path: 'mits', loadChildren: './mits/mits.module#MitsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
