import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conection } from '../../utility/conection';
import { Operation } from '../../utility/operation';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private _http:HttpClient) { }

  getRate():Observable<HttpResponse<Response>>{
    return this._http.get<Response>(`${Conection.URL}${Operation.getRate}`,{observe:'response'});
  }


  setRate():Observable<HttpResponse<Response>>{
    return this._http.get<Response>(`${Conection.URL}${Operation.setRate}`,{observe:'response'});
  }
}
