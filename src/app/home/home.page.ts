import { Component } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';

import { Tickers, Ticker, TickersList } from './../models/ticker.model'
import { Avatar } from './../models/avatar.model'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myControl = new FormControl();

  constructor(private explorer : ExplorerService){
    explorer.getTickers().subscribe((response: TickersList)=>{
      console.log(response)
    })
    explorer.getAvatars().subscribe((response: Avatar[])=>{
      console.log(response)
    })
    explorer.getSuggestions('lau', 10).subscribe((response: any)=>{
      console.log(response)
    })
  }

}
