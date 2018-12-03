import { Component, OnInit } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Mst } from './../models/mst.model'

@Component({
  selector: 'app-msts',
  templateUrl: './msts.page.html',
  styleUrls: ['./msts.page.scss'],
})
export class MstsPage implements OnInit {

  msts: any = []

  constructor(
    private explorer: ExplorerService
  ) { }

  ngOnInit() {
    this.explorer.getMsts().subscribe((response: Mst[])=>{
      this.msts = this.msts.concat(response)
    })
  }

}
