import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from './../../models/avatar.model'

@Component({
  selector: 'avatar-item',
  templateUrl: './avatar-item.component.html',
  styleUrls: ['./avatar-item.component.scss']
})
export class AvatarItemComponent implements OnInit {

  @Input() avatar: Avatar

  constructor() { }

  ngOnInit() {
    console.log(this.avatar)
  }

}
