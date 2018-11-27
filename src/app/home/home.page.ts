import { Component } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private explorer : ExplorerService){
    explorer.getHeight().subscribe((response: number)=>{
      console.log(response)
    })
  }

}
