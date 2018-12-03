import { Component, OnInit } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Block } from './../models/block.model'

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.page.html',
  styleUrls: ['./blocks.page.scss'],
})
export class BlocksPage implements OnInit {

  blocks: any = []

  constructor(
    private explorer: ExplorerService
  ) { }

  ngOnInit() {
    this.explorer.getBlocks().subscribe((response: Block[])=>{
      this.blocks = this.blocks.concat(response)
    })
  }

  doInfinite(infiniteScrollEvent) {
    this.explorer.getBlocks(this.blocks[this.blocks.length-1]._id).toPromise().then((response: Block[]) => {
      if(response) {
        this.blocks = this.blocks.concat(response)
        infiniteScrollEvent.target.complete();
      } else {
        infiniteScrollEvent.enable(false);
      }
    });
  }

}
