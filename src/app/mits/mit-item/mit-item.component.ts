import { Component, OnInit, Input } from '@angular/core';
import { Mit } from './../../models/mit.model'

@Component({
  selector: 'mit-item',
  templateUrl: './mit-item.component.html',
  styleUrls: ['./mit-item.component.scss']
})
export class MitItemComponent implements OnInit {

  @Input() mit: Mit

  constructor() { }

  ngOnInit() {
    console.log(this.mit)
  }

}
