import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CertificatesPage } from './certificates.page';
import { CertificateItemComponent } from './certificate-item/certificate-item.component';

const routes: Routes = [
  {
    path: '',
    component: CertificatesPage
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
    CertificatesPage,
    CertificateItemComponent
  ]
})
export class CertificatesPageModule {}
