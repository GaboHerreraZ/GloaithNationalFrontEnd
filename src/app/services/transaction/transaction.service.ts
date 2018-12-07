import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conection } from '../../utility/conection';
import { Operation } from '../../utility/operation';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http:HttpClient) { }

  getTransaction():Observable<HttpResponse<Response>>{
    return this._http.get<Response>(`${Conection.URL}${Operation.getTransaction}`,{observe:'response'});
  }

  setTransaction():Observable<HttpResponse<Response>>{
    return this._http.get<Response>(`${Conection.URL}${Operation.setTransaction}`,{observe:'response'});
  }

  getTotal(target:any):Observable<HttpResponse<Response>>{
    return this._http.post<Response>(`${Conection.URL}${Operation.getTotal}`,target,{observe:'response'});
  }

  getSkuTotal(sku:string):Observable<HttpResponse<Response>>{
    return this._http.get<Response>(`${Conection.URL}${Operation.getSku}?sku=${sku}`,{observe:'response'});
  }

}
