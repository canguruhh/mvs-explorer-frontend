import { Action } from '@ngrx/store'
import { Transaction } from './../models/transaction.model'
import * as TransactionActions from './../actions/transaction.actions'

export function transactionreducer(state: Transaction[] = [], action: TransactionActions.Actions) {

  switch (action.type) {
    case TransactionActions.ADD_TRANSACTION:
      return sort([action.payload, ...state]);
    case TransactionActions.ADD_BLOCKINFO_TO_TRANSACTION:
      return sort(state.map(tx => {
        if (tx.hash == action.txid) {
          tx.height = action.blockinfo.number
          tx.confirmed_at = action.blockinfo.time_stamp
        }
        return tx
      }))
    case TransactionActions.REPLACE_TRANSACTIONS:
      return sort(action.payload)
    default:
      return state;
  }
}

function sort(transactions){
 return transactions.sort((a, b) => (b.confirmed_at ? b.confirmed_at : b.received_at) - (a.confirmed_at ? a.confirmed_at : a.received_at)).slice(0, 10)
}