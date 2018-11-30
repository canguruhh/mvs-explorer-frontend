import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Transaction } from './../../models/transaction.model';
import { AppState } from './../../app.state';

@Component({
  selector: 'latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss']
})
export class LatestTransactionsComponent implements OnInit {
  transactions: Observable<Transaction[]>;

  constructor(private store: Store<AppState>) {
    this.transactions = store.select('transactions');
  }

  ngOnInit() {
  }

}
