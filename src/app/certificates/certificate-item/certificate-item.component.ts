import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from './../../models/certificate.model'

@Component({
  selector: 'certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.scss']
})
export class CertificateItemComponent implements OnInit {

  @Input() certificate: Certificate

  constructor() { }

  ngOnInit() {
    console.log(this.certificate)
  }

}
