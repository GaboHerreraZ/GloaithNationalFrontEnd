import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RateService } from './rate.service';

@Injectable({
  providedIn: 'root'
})
export class AccessRateService {

  constructor(private _rateService:RateService ) { }

  private dataRate = new Subject();
  public dataRate$ = this.dataRate.asObservable();

  private dataSetRate = new Subject();
  public dataSetRate$ = this.dataSetRate.asObservable();


  getRate(){
      this._rateService.getRate().subscribe((res:any)=>{
        this.dataRate.next(res);
      },(error:any)=>{
        this.dataRate.next(error);
      })    
  }

  setRate(){
    this._rateService.setRate().subscribe((res:any)=>{
      this.dataSetRate.next(res);
    },(error:any)=>{
      this.dataSetRate.next(error);
    }) 
  }
  
}