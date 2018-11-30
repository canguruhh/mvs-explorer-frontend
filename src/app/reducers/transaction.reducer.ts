import { Action } from '@ngrx/store'
import { Transaction } from './../models/transaction.model'
import * as TransactionActions from './../actions/transaction.actions'

export function transactionreducer(state: Transaction[] = [], action: TransactionActions.Actions) {

  switch (action.type) {
    case TransactionActions.ADD_TRANSACTION:
      return [action.payload, ...state].sort((a, b) => b.height - a.height).slice(0, 10);
    case TransactionActions.REPLACE_TRANSACTIONS:
      return action.payload.sort((a, b) => b.height - a.height).slice(0, 10);
    default:
      return state;
  }
}
