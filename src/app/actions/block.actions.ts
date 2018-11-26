import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Block } from './../models/block.model'

export const ADD_BLOCK       = '[BLOCK] Add'
export const REPLACE_BLOCKS    = '[BLOCK] Replace'

export class AddBlock implements Action {
    readonly type = ADD_BLOCK

    constructor(public payload: Block) {}
}

export class ReplaceBlocks implements Action {
    readonly type = REPLACE_BLOCKS

    constructor(public payload: Block[]) {}
}

export type Actions = AddBlock | ReplaceBlocks
