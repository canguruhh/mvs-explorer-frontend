import { Injectable } from '@angular/core';
import * as Autobahn from 'autobahn-browser';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import * as BlockActions from './actions/block.actions';
import * as TransactionActions from './actions/transaction.actions';
import { Observable } from 'rxjs/Observable';

import { Block } from './models/block.model'
import { Transaction } from './models/transaction.model'

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private store: Store<AppState>) {
    var connection = new Autobahn.Connection({ url: 'wss://explorer-testnet.mvs.org/ws', realm: 'realm1' });
    connection.onopen = (session) => {

      console.log('connection open', connection)

      session.subscribe('public.transactions', ([txs, action]) => {
        console.log(txs)
        switch(action){
          case 'i':
            this.replaceTransactions(txs)
            break
          case 'u':
            txs.forEach(tx=>this.addTransaction(tx))
            break
          default:
            console.log('unknown live action on type block: ', action)
        }
      });

      session.subscribe('public.blocks', ([blocks, action]) => {
        switch(action){
          case 'i':
            this.replaceBlocks(blocks)
            break
          case 'u':
            blocks.forEach(block=>this.addBlock(block))
            break
          default:
            console.log('unknown live action on type block: ', action)
        }
      });

    };
    connection.open();
  }

  addBlock(block: Block) {
    this.store.dispatch(new BlockActions.AddBlock(block) )
  }
  replaceBlocks(blocks: Block[]) {
    this.store.dispatch(new BlockActions.ReplaceBlocks(blocks) )
  }

  addTransaction(transaction: Transaction) {
    this.store.dispatch(new TransactionActions.AddTransaction(transaction) )
  }
  replaceTransactions(transactions: Transaction[]) {
    this.store.dispatch(new TransactionActions.ReplaceTransactions(transactions) )
  }
}
