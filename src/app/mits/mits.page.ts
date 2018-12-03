import { Component, OnInit } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Mit } from './../models/mit.model'

@Component({
  selector: 'app-mits',
  templateUrl: './mits.page.html',
  styleUrls: ['./mits.page.scss'],
})
export class MitsPage implements OnInit {

  mits: any = []

  constructor(
    private explorer: ExplorerService
  ) { }

  ngOnInit() {
    this.explorer.getMits().subscribe((response: Mit[])=>{
      this.mits = this.mits.concat(response)
    })
  }

  doInfinite(infiniteScrollEvent) {
    this.explorer.getMits(this.mits[this.mits.length-1]._id).toPromise().then((response: Mit[]) => {
      if(response) {
        this.mits = this.mits.concat(response)
        infiniteScrollEvent.target.complete();
      } else {
        infiniteScrollEvent.enable(false);
      }
    });
  }

}
