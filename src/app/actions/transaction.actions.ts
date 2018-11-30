import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Transaction } from './../models/transaction.model'

export const ADD_TRANSACTION       = '[TRANSACTION] Add'
export const REPLACE_TRANSACTIONS    = '[TRANSACTION] Replace'

export class AddTransaction implements Action {
    readonly type = ADD_TRANSACTION

    constructor(public payload: Transaction) {}
}

export class ReplaceTransactions implements Action {
    readonly type = REPLACE_TRANSACTIONS

    constructor(public payload: Transaction[]) {}
}

export type Actions = AddTransaction | ReplaceTransactions
