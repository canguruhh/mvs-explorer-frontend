import { Injectable } from '@angular/core';
import * as Autobahn from 'autobahn-browser';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor() {
    var connection = new Autobahn.Connection({ url: 'wss://explorer.mvs.org/ws', realm: 'realm1' });
    connection.onopen = function(session) {

      console.log('connection open', connection)

      session.subscribe('public.transactions', (txs) => {
        console.log('txs', txs)
      });

      session.subscribe('public.blocks', (blocks) => {
        console.log('blocks', blocks)
      });

    };
    connection.open();
  }
}
