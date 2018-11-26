import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Block } from './../models/block.model';
import { AppState } from './../app.state';

@Component({
  selector: 'latest-blocks',
  templateUrl: './latest-blocks.component.html',
  styleUrls: ['./latest-blocks.component.scss']
})
export class LatestBlocksComponent implements OnInit {
  blocks: Observable<Block[]>;

  constructor(private store: Store<AppState>) { 
    this.blocks = store.select('blocks');
  }

  ngOnInit() {
  }

}
