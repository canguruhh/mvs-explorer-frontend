import { Component, OnInit } from '@angular/core';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Transaction } from './../models/transaction.model'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transactions: any = []

  constructor(
    private explorer: ExplorerService
  ) { }

  ngOnInit() {
    this.explorer.getTransactions().subscribe((response: Transaction[])=>{
      this.transactions = this.transactions.concat(response)
    })
  }

  doInfinite(infiniteScrollEvent) {
    this.explorer.getTransactions(this.transactions[this.transactions.length-1]._id).toPromise().then((response: Transaction[]) => {
      if(response) {
        this.transactions = this.transactions.concat(response)
        infiniteScrollEvent.target.complete();
      } else {
        infiniteScrollEvent.enable(false);
      }
    });
  }
}
