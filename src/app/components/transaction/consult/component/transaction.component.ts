import { Component, OnInit } from '@angular/core';
import { AccessTransactionService } from '../../../../services/transaction/access.transaction.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../../../../utility/message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private _transcService:AccessTransactionService,
              private _toastrService:ToastrService) { }

  transaction:any;
  loading:boolean=false;
  show:boolean= false;
  sub:Subscription;

  ngOnInit() {
    this.getTransaction();
  }
  
  getTransaction(){
    this.loading = true;
    this._transcService.getTransaction();
    this.sub = this._transcService.data$.subscribe((res:any)=>{
      if(res.status ==200){
        this.transaction = res.body.Data;
        this.loading = false;
        this.show = true;
        this._toastrService.success(Message.OK,'OK!');
      }else if (res.status ==0){
        this._toastrService.error("No hay comunicación con los servicios del Back-End","ERROR!");
        this.loading = false;
       }else{
        this._toastrService.error(res.error.Data,'Error!');
        this.loading = false;
      } 
    })
  }

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
