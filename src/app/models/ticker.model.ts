export interface Ticker{
  market_cap: number
  percent_change_1h: number
  percent_change_7d: number
  percent_change_24h: number
  price: number
  volume_24h: number
}

export interface TickersList{
  ETP: Tickers
  ['MVS.ZGC'] : Tickers
}

export interface Tickers{
  BTC: Ticker
  CNY: Ticker
  EUR: Ticker
  GBP: Ticker
  JPY: Ticker
  USD: Ticker
}
