import { Action } from '@ngrx/store'
import { Block } from './../models/block.model'
import * as BlockActions from './../actions/block.actions'

export function blockreducer(state: Block[] = [], action: BlockActions.Actions) {

  switch (action.type) {
    case BlockActions.ADD_BLOCK:
      return [action.payload, ...state].sort((a, b) => b.number - a.number).slice(0, 10);
    case BlockActions.REPLACE_BLOCKS:
      return action.payload.sort((a, b) => b.number - a.number).slice(0, 10);
    default:
      return state;
  }
}
