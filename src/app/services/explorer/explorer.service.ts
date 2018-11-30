import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

import { Tickers, Ticker, TickersList } from './../../models/ticker.model'
import { Transaction } from './../../models/transaction.model'
import { Avatar } from './../../models/avatar.model'
import { Suggestions } from './../../models/suggestion.model'

interface ExplorerResponseStatus {
  success: boolean
  message?: string
}


export interface ExplorerResponse<T> {
  status: ExplorerResponseStatus;
  result: T;
}

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  constructor(private http: HttpClient) { }

  get(endpoint) {
    return this.http.get<ExplorerResponse<any>>("https://explorer-testnet.mvs.org/api/" + endpoint).map(response => response.result)
  }

  getHeight(): Observable<number> {
    return this.get('height')
  }

  getTickers(): Observable<TickersList> {
    return this.get('pricing/tickers')
  }

  getTransactions(last_known?): Observable<Transaction[]> {
    return this.get('v2/txs'+((last_known)?'?last_known='+last_known:''))
  }

  getAvatars(): Observable<Avatar[]> {
    return this.get('v2/avatars')
  }

  getSuggestions(search, limit): Observable<Suggestions> {
    return this.get('suggest/all/' + search + '?limit=' + (limit ? limit : '10')).map(response=>response)
  }

}
