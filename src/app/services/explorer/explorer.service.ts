import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

interface ExplorerResponseStatus {
  success: boolean
  message?: string
}

export interface ExplorerResponse<T> {
  status: ExplorerResponseStatus;
  result: T;
}

export interface ExplorerHeightResponse extends ExplorerResponse<number>

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  constructor(private http: HttpClient) { }

  getHeight : number(){
    return this.http.get<ExplorerResponse<number>("https://explorer.mvs.org/api/height").map(response=>response.result)
  }
}
