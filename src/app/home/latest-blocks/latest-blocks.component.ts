import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Block } from './../../models/block.model';
import { AppState } from './../../app.state';
import { ExplorerService } from './../../services/explorer/explorer.service';

@Component({
  selector: 'latest-blocks',
  templateUrl: './latest-blocks.component.html',
  styleUrls: ['./latest-blocks.component.scss']
})
export class LatestBlocksComponent implements OnInit {
  blocks: Observable<Block[]>;
  poolsPerAddress: Object = {}

  constructor(private store: Store<AppState>, private explorer: ExplorerService) {
    this.blocks = store.select('blocks');

    this.explorer.getPoolStats().toPromise().then((poolstats) => {
      console.log(poolstats)
      poolstats.forEach((pool) => {
        pool.addresses.forEach((address) => {
          this.poolsPerAddress[address] = pool
        })
      })
    })

  }

  ngOnInit() {
  }

}
