import { Component, OnInit } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Avatar } from './../models/avatar.model'

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.page.html',
  styleUrls: ['./avatars.page.scss'],
})
export class AvatarsPage implements OnInit {

  avatars: any = []

  constructor(
    private explorer: ExplorerService
  ) { }

  ngOnInit() {
    this.explorer.getAvatars().subscribe((response: Avatar[])=>{
      this.avatars = this.avatars.concat(response)
    })
  }

  doInfinite(infiniteScrollEvent) {
    this.explorer.getAvatars(this.avatars[this.avatars.length-1]._id).toPromise().then((response: Avatar[]) => {
      if(response) {
        this.avatars = this.avatars.concat(response)
        infiniteScrollEvent.target.complete();
      } else {
        infiniteScrollEvent.enable(false);
      }
    });
  }

}
