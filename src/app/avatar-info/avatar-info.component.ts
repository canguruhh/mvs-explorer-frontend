import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from './../models/avatar.model'

@Component({
  selector: 'avatar-info',
  templateUrl: './avatar-info.component.html',
  styleUrls: ['./avatar-info.component.scss']
})
export class AvatarInfoComponent implements OnInit {

  @Input() avatar: Avatar

  constructor() { }

  ngOnInit() {
  }

}
