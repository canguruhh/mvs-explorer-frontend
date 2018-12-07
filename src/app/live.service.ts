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

  initialized = {
    tx: {
      done: false,
      data: []
    },
    block: {
      done: false,
      data: []
    }    
  }

  constructor(private store: Store<AppState>) {
    var connection = new Autobahn.Connection({ url: 'wss://explorer-testnet.mvs.org/ws', realm: 'realm1' });
    connection.onopen = (session) => {

      console.log('connection open', connection)

      session.subscribe('public.transactions', ([txs, action]) => {
        console.log(txs)
        switch (action) {
          case 'i':
            this.replaceTransactions(txs)
            this.initialized.tx.data = txs
            if (this.initialized.block.done) {
              this.initialized.block.data.forEach(block => {
                block.txs.forEach(txid => this.addBlockinfoTransaction(txid, block))
              })
            }
            this.initialized.tx.done = true
            break
          case 'u':
            txs.forEach(tx => this.addTransaction(tx))
            break
          default:
            console.log('unknown live action on type block: ', action)
        }
      });

      session.subscribe('public.blocks', ([blocks, action]) => {
        switch (action) {
          case 'i':
            this.replaceBlocks(blocks)
            this.initialized.block.data = blocks
            if (this.initialized.tx.done) {
              blocks.forEach(block => {
                block.txs.forEach(txid => this.addBlockinfoTransaction(txid, block))
              })
            }
            this.initialized.block.done = true
            break
          case 'u':
            blocks.forEach(block => {
              block.txs.forEach(txid => this.addBlockinfoTransaction(txid, block))
              this.addBlock(block)
            })
            break
          default:
            console.log('unknown live action on type block: ', action)
        }
      });

    };
    connection.open();
  }

  isInitialized(){
    return this.initialized.block.done && this.initialized.tx.done
  }

  addBlock(block: Block) {
    this.store.dispatch(new BlockActions.AddBlock(block))
  }
  replaceBlocks(blocks: Block[]) {
    this.store.dispatch(new BlockActions.ReplaceBlocks(blocks))
  }

  addTransaction(transaction: Transaction) {
    this.store.dispatch(new TransactionActions.AddTransaction(transaction))
  }
  replaceTransactions(transactions: Transaction[]) {
    this.store.dispatch(new TransactionActions.ReplaceTransactions(transactions))
  }
  addBlockinfoTransaction(txid, block) {
    this.store.dispatch(new TransactionActions.AddBlockinfoToTransaction(txid, block))
  }
}
