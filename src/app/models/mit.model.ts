export interface Mit {
  address: string
  attachement: {
    address: string
    from_did: string
    status: string
    symbol: string
    to_did: string
    type: string
  }
  confirmed_at: number
  height: number
  index: number
  locked_height_range: number
  orphaned_at: number
  script: string
  spent_tx: string
  tx: string
  value: number
}
