export interface Certificate {
  address: string
  attachement: {
    address: string
    cert: string
    from_did: string
    owner: string
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
