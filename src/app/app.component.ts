import { Component ,OnInit} from '@angular/core';
import { AccessTransactionService } from './services/transaction/access.transaction.service';
import { AccessRateService } from './services/rate/access.rate.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from './utility/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(private _accessTransac:AccessTransactionService,
              private _accessRate:AccessRateService,
              private _toastrService:ToastrService){

  }

  loading:boolean=false;

  ngOnInit(){
    this.setRate();
    this.setTransaction();
  }

  setTransaction(){
    this.loading = true;
    this._accessTransac.setTransaction();
    this._accessTransac.dataSet$.subscribe((res:any)=>{
      if(res.status ==200){
        this.loading = false;
      }else if (res.status ==0){
        this._toastrService.error("Error actualizando las transacciones","ERROR!");
        this.loading = false;
       }else{
        this._toastrService.error(res.error.Data,'Error!');
        this.loading = false;
      } 
    })

  }

  setRate(){
    this.loading = true;
    this._accessRate.setRate();
    this._accessRate.dataSetRate$.subscribe((res:any)=>{
      if(res.status ==200){
        this.loading = false;
      }
      else if (res.status ==0){
        this._toastrService.error("Error actualizando las conversiones","ERROR!");
        this.loading = false;
       }else{
        this._toastrService.error(res.error.Data,'Error!');
        this.loading = false;
      } 
    })
  }
  }


