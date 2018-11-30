import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Suggestions } from './../models/suggestion.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { catchError, map, tap, startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';

export interface SuggestionListItem {
  name: any;
  url: string;
  type: string;
  icon: string;
  height: string;
  nbrtx: string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  suggestionsCtrl = new FormControl();
  suggestions: [SuggestionListItem];
  private initialSuggestions: any;

  constructor(private explorer: ExplorerService, public translate: TranslateService) {

    this.suggestionsCtrl.valueChanges
      .pipe(
        startWith(null),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(async query=>{
        this.suggestions = (query && query.length >= 3) ? await this.search(query) : this.initialSuggestions
      })

  }

  ngOnInit() {

    this.translate.get(['SUGGESTION.SHOW_ALL_TX', 'SUGGESTION.SHOW_ALL_BLOCKS', 'SUGGESTION.SHOW_ALL_ASSETS', 'SUGGESTION.SHOW_ALL_AVATARS', 'SUGGESTION.SHOW_ALL_MITS']).subscribe(translations => {
      this.initialSuggestions = [
        {
          'name': translations['SUGGESTION.SHOW_ALL_TX'],
          'url': 'txs',
          'type': 'tx',
        },
        {
          'name': translations['SUGGESTION.SHOW_ALL_BLOCKS'],
          'url': 'blocks',
          'type': 'blockHeight',
        },
        {
          'name': translations['SUGGESTION.SHOW_ALL_ASSETS'],
          'url': 'assets',
          'type': 'asset',
          'icon': 'default_mst'
        },
        {
          'name': translations['SUGGESTION.SHOW_ALL_AVATARS'],
          'url': 'avatars',
          'type': 'avatar',
          'icon': 'default_avatar'
        },
        {
          'name': translations['SUGGESTION.SHOW_ALL_MITS'],
          'url': 'mits',
          'type': 'mit',
          'icon': 'default_mit'
        }
      ]
    });

  }

  private search(query: string) {
    return this.explorer.getSuggestions(query, 10).toPromise().then((response) => {
      if (response != undefined) {
        return this.setResults(query, response);
      } else return [];
    })
  }

  private setResults(text, result) {
    return Promise.all([this.setResultsInit(text), this.setResultsAsset(result.asset), this.setResultsAddress(result.address), this.setResultsAvatar(result.avatar), this.setResultsMit(result.mit), this.setResultsTx(result.tx), this.setResultsBlockHash(result.block)])
      .then((results) => {
        console.log(results.reduce((acc, val) => acc.concat(val)));
        return results.reduce((acc, val) => acc.concat(val))
      });
  }

  private setResultsInit(text) {
    var repos = [];
    if (!isNaN(text)) {
      repos.push({
        'name': text,
        'url': 'blk/' + text,
        'type': 'blockHeight',
      });
    } else if (text.toUpperCase() == "ETP") {
      repos.push({
        'name': 'ETP',
        'url': 'asset/ETP',
        'type': 'asset',
        'icon': 'ETP'
      });
    }
    return repos;
  }

  private setResultsAsset(assets) {
    return assets.map((asset) => {
      return {
        name: asset,
        url: "asset/" + asset,
        type: "asset",
        //icon: this.icons.indexOf(asset) > -1 ? asset : 'default_mst'
      };
    });
  }

  private setResultsAvatar(avatars) {
    return avatars.map((avatar) => {
      return {
        name: avatar,
        url: 'avatar/' + avatar,
        type: 'avatar',
        icon: 'default_avatar'
      };
    });
  }

  private setResultsAddress(addresses) {
    return addresses.map((address) => {
      return {
        name: address.a,
        url: "adr/" + address.a,
        nbrtx: address.n,
        type: "address"
      };
    });
  }

  private setResultsTx(txs) {
    return txs.map((tx) => {
      return {
        name: tx.h,
        url: "tx/" + tx.h,
        height: tx.b,
        type: "tx"
      };
    });
  }

  private setResultsBlockHash(blocks) {
    return blocks.map((block) => {
      return {
        name: block.h,
        url: "blk/" + block.h,
        height: block.n,
        type: "blockHash"
      };
    });
  }

  private setResultsMit(mits) {
    return mits.map((mit) => {
      return {
        name: mit,
        url: 'mit/' + mit,
        type: 'mit',
        icon: 'default_mit'
      };
    })
  }
}
