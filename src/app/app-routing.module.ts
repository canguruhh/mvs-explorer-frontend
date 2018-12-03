import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'avatars', loadChildren: './avatars/avatars.module#AvatarsPageModule' },
  { path: 'txs', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
  { path: 'blocks', loadChildren: './blocks/blocks.module#BlocksPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
