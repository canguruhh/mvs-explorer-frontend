export interface Input {
  previous_output: {
    hash: string
    index: number
  }
  script: string
  sequence: number
  index: number
  attachment: any
  address: string
  value: number
}

export interface Output {
  address: string
  attachment: any
  index: number
  locked_height_range: number
  script: string
  value: number
  tx: string
  orphaned_at: number
  height: number
  spent_tx: string
  confirmed_at: number
  _id: string
}

export interface Transaction{
  id: string
  hash: string
  inputs: [Input]
  lock_time: string
  outputs: [Output]
  version: string
  height: number
  orphan: number
  block: string
  confirmed_at: number
  rawtx: string
}

