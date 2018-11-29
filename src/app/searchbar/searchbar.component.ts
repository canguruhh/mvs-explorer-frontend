import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ExplorerService } from './../services/explorer/explorer.service';
import { Suggestions } from './../models/suggestion.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { catchError, map, tap,startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';


export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  suggestionsCtrl = new FormControl();
  initialSuggestions: any = [];
  filteredSuggestions: Observable<any>;

  suggestions: any[] = []

  constructor(private explorer : ExplorerService, public translate: TranslateService) {
    explorer.getSuggestions('lau', 10).subscribe((response: Suggestions)=>{
      console.log(response)
    })

    this.filteredSuggestions = this.suggestionsCtrl.valueChanges
    .pipe(
          startWith(null),
          debounceTime(500),
          distinctUntilChanged(),
          switchMap(query => {
            console.log(query)
            return (query && query.length >= 3) ? this.search(query) : this.initialSuggestions.slice()
          })
        );
    //  debounceTime(500),
    //  .startWith(null)
    //  .subscribe(query => (query && query.length >= 3) ? this.search(query) : this.initialSuggestions)


  }

  ngOnInit() {



      /*.pipe(
        startWith(''),
        map(query => (query && query.length >= 3) ? this.search(query) : this.initialSuggestions)
      );*/

    this.translate.get(['SUGGESTION.SHOW_ALL_TX', 'SUGGESTION.SHOW_ALL_BLOCKS', 'SUGGESTION.SHOW_ALL_ASSETS', 'SUGGESTION.SHOW_ALL_AVATARS', 'SUGGESTION.SHOW_ALL_MITS']).subscribe(translations => {
      this.initialSuggestions.push({
        'name': translations['SUGGESTION.SHOW_ALL_TX'],
        'url': 'txs',
        'type': 'tx',
      });
      this.initialSuggestions.push({
        'name': translations['SUGGESTION.SHOW_ALL_BLOCKS'],
        'url': 'blocks',
        'type': 'blockHeight',
      });
      this.initialSuggestions.push({
        'name': translations['SUGGESTION.SHOW_ALL_ASSETS'],
        'url': 'assets',
        'type': 'asset',
        'icon': 'default_mst'
      });
      this.initialSuggestions.push({
        'name': translations['SUGGESTION.SHOW_ALL_AVATARS'],
        'url': 'avatars',
        'type': 'avatar',
        'icon': 'default_avatar'
      });
      this.initialSuggestions.push({
        'name': translations['SUGGESTION.SHOW_ALL_MITS'],
        'url': 'mits',
        'type': 'mit',
        'icon': 'default_mit'
      });
    });

    this.suggestions = this.initialSuggestions;

  }

  private search(query: string) {
    console.log(this.filteredSuggestions)
    //this.explorer.getSuggestions(query, 10).toPromise().then((response)=>{
    return this.explorer.getSuggestions(query, 10).toPromise().then((response)=>{
      console.log(response)
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
  /*

  this.presEnterSearch = presEnterSearch;

  this.querySearch = querySearch;
  this.selectedItemChange = selectedItemChange;
  this.searchTextChange = searchTextChange;
  this.search = search;
  this.setResults = setResults;
  this.setResultsTx = setResultsTx;
  this.initialSuggestions = [];
  this.init = init;
  this.icons = Assets.hasIcon;

  function init() {
      $translate(['SUGGESTION.SHOW_ALL_TX', 'SUGGESTION.SHOW_ALL_BLOCKS', 'SUGGESTION.SHOW_ALL_ASSETS', 'SUGGESTION.SHOW_ALL_AVATARS', 'SUGGESTION.SHOW_ALL_MITS'])
          .then((translations) => {
              this.initialSuggestions.push({
                  'name': translations['SUGGESTION.SHOW_ALL_TX'],
                  'url': 'txs',
                  'type': 'tx',
              });
              this.initialSuggestions.push({
                  'name': translations['SUGGESTION.SHOW_ALL_BLOCKS'],
                  'url': 'blocks',
                  'type': 'blockHeight',
              });
              this.initialSuggestions.push({
                  'name': translations['SUGGESTION.SHOW_ALL_ASSETS'],
                  'url': 'assets',
                  'type': 'asset',
                  'icon': 'default_mst'
              });
              this.initialSuggestions.push({
                  'name': translations['SUGGESTION.SHOW_ALL_AVATARS'],
                  'url': 'avatars',
                  'type': 'avatar',
                  'icon': 'default_avatar'
              });
              this.initialSuggestions.push({
                  'name': translations['SUGGESTION.SHOW_ALL_MITS'],
                  'url': 'mits',
                  'type': 'mit',
                  'icon': 'default_mit'
              });
          });
  }

  init();

  function querySearch(query) {
      return (query && query.length >= 3) ? search(query) : this.initialSuggestions;
  }


  function presEnterSearch(search_field) {
      if (search_field == "") {
          $translate('MESSAGES.ERROR_SEARCH_NOT_FOUND')
              .then((data) => FlashService.Error(data));
      } else if ($filter('uppercase')(search_field) == "ETP") {
          $location.path('/asset/ETP');
      } else {
          switch (search_field.length) {
              case 64:
                  show_transaction_or_block(search_field);
                  break;
              case 34:
                  show_address(search_field);
                  break;
              default:
                  if (!isNaN(search_field))
                      show_block(search_field);
                  else
                      show_asset(search_field);
          }
      }
  }

  function show_address(search_field) {
      NProgress.start();
      MetaverseService.FetchHistory(search_field)
          .then((response) => {
              if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined) {
                  $location.path('/adr/' + search_field);
              } else {
                  $translate('MESSAGES.ERROR_ADDRESS_NOT_FOUND')
                      .then((data) => FlashService.Error(data));
              }
              NProgress.done();
          });
  }

  function show_block(search_field) {
      NProgress.start();
      MetaverseService.Block(search_field)
          .then((response) => {
              if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined) {
                  $location.path('/blk/' + search_field);
              } else {
                  $translate('MESSAGES.ERROR_BLOCK_NOT_FOUND')
                      .then((data) => FlashService.Error(data));
              }
              NProgress.done();
          });
  }


  function show_transaction_or_block(search_field) {
      NProgress.start();
      MetaverseService.FetchTx(search_field)
          .then((response) => {
              if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined) {
                  $location.path('/tx/' + search_field);
              } else {
                  MetaverseService.Block(search_field)
                      .then((response) => {
                          if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined) {
                              $location.path('/blk/' + search_field);
                          } else {
                              $translate('MESSAGES.ERROR_TRANSACTION_NOT_FOUND')
                                  .then((data) => FlashService.Error(data));
                          }
                          NProgress.done();
                      });
              }
              NProgress.done();
          });
  }

  function show_asset(search_field) {
      NProgress.start();
      MetaverseService.AssetInfo($filter('uppercase')(search_field))
          .then((response) => {
              if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined && response.data.result.length != 0) {
                  $location.path('/asset/' + $filter('uppercase')(search_field));
              } else {
                MetaverseService.FetchAvatar(search_field)
                    .then((response) => {
                        if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined && response.data.result.length != 0) {
                            $location.path('/avatar/' + search_field);
                        } else {
                            MetaverseService.MitInfo(search_field)
                                .then((response) => {
                                    if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined && response.data.result.length != 0) {
                                        $location.path('/mit/' + search_field);
                                    } else {
                                        $translate('MESSAGES.ERROR_SEARCH_NOT_FOUND')
                                            .then((data) => FlashService.Error(data));
                                    }
                                    NProgress.done();
                                });
                        }
                        NProgress.done();
                    });
              }
              NProgress.done();
          });
  }

  function searchTextChange(text) {

  }

  function selectedItemChange(item) {

  }

  function search(text) {
      return MetaverseService.SearchAll(text, 10)
          .then((response) => {
              if (typeof response.success !== 'undefined' && response.success && response.data.result != undefined) {
                  return setResults(text, response.data.result);
              } else return [];
          });
  }

  function setResults(text, result) {
      return Promise.all([setResultsInit(text), setResultsAsset(result.asset), setResultsAddress(result.address), setResultsAvatar(result.avatar), setResultsMit(result.mit), setResultsTx(result.tx), setResultsBlockHash(result.block)])
          .then((results) => results.reduce((acc, val) => acc.concat(val)));
  }

  function setResultsInit(text) {
      var repos = [];
      if (!isNaN(text)) {
          repos.push({
              'name': text,
              'url': 'blk/' + text,
              'type': 'blockHeight',
          });
      } else if ($filter('uppercase')(text) == "ETP") {
          repos.push({
              'name': 'ETP',
              'url': 'asset/ETP',
              'type': 'asset',
              'icon': 'ETP'
          });
      }
      return repos;
  }

  function setResultsAsset(assets) {
      return assets.map((asset) => {
          return {
              name: asset,
              url: "asset/" + asset,
              type: "asset",
              icon: this.icons.indexOf(asset) > -1 ? asset : 'default_mst'
          };
      });
  }

  function setResultsAvatar(avatars) {
      return avatars.map((avatar) => {
          return {
              name: avatar,
              url: 'avatar/' + avatar,
              type: 'avatar',
              icon: 'default_avatar'
          };
      });
  }

  function setResultsAddress(addresses) {
      return addresses.map((address) => {
          return {
              name: address.a,
              url: "adr/" + address.a,
              nbrtx: address.n,
              type: "address"
          };
      });
  }

  function setResultsTx(txs) {
      return txs.map((tx) => {
          return {
              name: tx.h,
              url: "tx/" + tx.h,
              height: tx.b,
              type: "tx"
          };
      });
  }

  function setResultsBlockHash(blocks) {
      return blocks.map((block) => {
          return {
              name: block.h,
              url: "blk/" + block.h,
              height: block.n,
              type: "blockHash"
          };
      });
  }

  function setResultsMit(mits) {
      return mits.map((mit) => {
          return {
              name: mit,
              url: 'mit/' + mit,
              type: 'mit',
              icon: 'default_mit'
          };


*/
