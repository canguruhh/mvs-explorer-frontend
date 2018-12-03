import { Component, OnInit } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Certificate } from './../models/certificate.model'

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.page.html',
  styleUrls: ['./certificates.page.scss'],
})
export class CertificatesPage implements OnInit {

  certificates: any = []

  constructor(
    private explorer: ExplorerService
  ) { }

  ngOnInit() {
    this.explorer.getCertificates().subscribe((response: Certificate[])=>{
      this.certificates = this.certificates.concat(response)
    })
  }

  doInfinite(infiniteScrollEvent) {
    this.explorer.getCertificates(this.certificates[this.certificates.length-1]._id).toPromise().then((response: Certificate[]) => {
      if(response) {
        this.certificates = this.certificates.concat(response)
        infiniteScrollEvent.target.complete();
      } else {
        infiniteScrollEvent.enable(false);
      }
    });
  }

}
