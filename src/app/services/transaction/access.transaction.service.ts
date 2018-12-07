import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TransactionService } from './transaction.service';

@Injectable({
  providedIn: 'root'
})
export class AccessTransactionService {

  constructor(private _transcService:TransactionService ) { }

  private data = new Subject();
  public data$ = this.data.asObservable();

  private dataTotal = new Subject();
  public dataTotal$ = this.dataTotal.asObservable();

  private dataSet = new Subject();
  public dataSet$ = this.dataSet.asObservable();

  private dataSku = new Subject();
  public dataSku$ = this.dataSku.asObservable();

  getTransaction(){
      this._transcService.getTransaction().subscribe((res:any)=>{
        this.data.next(res);
      },(error:any)=>{
        this.data.next(error);
      })    
  }

  getTotal(target:any){
    this._transcService.getTotal(target).subscribe((res:any)=>{
      this.dataTotal.next(res);
    },(error:any)=>{
      this.dataTotal.next(error);
    })
  }
  
  setTransaction(){
    this._transcService.setTransaction().subscribe((res:any)=>{
      this.dataSet.next(res);
    },(error:any)=>{
      this.dataSet.next(error);
    })
  }

  getSku(sku:string){
    this._transcService.getSkuTotal(sku).subscribe((res:any)=>{
      this.dataSku.next(res);
    },(error:any)=>{
      this.dataSku.next(error);
    })
  }



}