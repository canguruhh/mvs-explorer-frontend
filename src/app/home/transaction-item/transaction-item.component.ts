import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './../../models/transaction.model'

@Component({
  selector: 'transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction: Transaction

  constructor() { }

  ngOnInit() {
    console.log(this.transaction)
  }

}
