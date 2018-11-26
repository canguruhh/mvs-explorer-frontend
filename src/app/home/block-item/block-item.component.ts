import { Component, OnInit, Input } from '@angular/core';
import { Block } from './../../models/block.model'

@Component({
  selector: 'block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.scss']
})
export class BlockItemComponent implements OnInit {

  @Input() block: Block

  constructor() { }

  ngOnInit() {
  }

}
