import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ExplorerService } from './../services/explorer/explorer.service';
import { Avatar } from './../models/avatar.model'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  avatar: string
  avatarInfo: Avatar

  constructor(private route: ActivatedRoute, private explorer: ExplorerService) { }

  ngOnInit() {
    this.avatar = this.route.snapshot.paramMap.get("avatar")

    this.explorer.getAvatar(this.avatar).subscribe((response: Avatar)=>{
      this.avatarInfo = response
    })
  }

}
