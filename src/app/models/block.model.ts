export interface Block {
  bits: string
  hash: string
  merkle_tree_hash: string
  mixhash: string
  nonce: string
  number: number
  orphan: boolean
  previous_block_hash: string
  time_stamp: number
  transaction_count: number
  txs: string[]
  version: number
}
