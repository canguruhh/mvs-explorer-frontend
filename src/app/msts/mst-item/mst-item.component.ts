import { Component, OnInit, Input } from '@angular/core';
import { Mst } from './../../models/mst.model'

@Component({
  selector: 'mst-item',
  templateUrl: './mst-item.component.html',
  styleUrls: ['./mst-item.component.scss']
})
export class MstItemComponent implements OnInit {

  @Input() mst: Mst

  constructor() { }

  ngOnInit() {
    console.log(this.mst)
  }

}
