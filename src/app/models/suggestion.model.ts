export interface TransactionSuggestion{
  h: string
  b: number
}

export interface AddressSuggestion{
  a: string
  n: number
}

export interface BlockSuggestion{
  h: string
  n: number
  t: number
}

export interface Suggestions{
  tx: TransactionSuggestion[]
  address: AddressSuggestion[]
  block: BlockSuggestion[]
  asset: string[]
  avatar: string[]
  mit: string[]
}
