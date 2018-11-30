import { Component, OnInit } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Transaction } from './../models/transaction.model'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(
    private explorer: ExplorerService
  ) { }

  ngOnInit() {
    this.explorer.getTransactions("5bab472f91f5cfce13a41e96").subscribe((response: Transaction[])=>{
      console.log(response)
    })
  }

}
