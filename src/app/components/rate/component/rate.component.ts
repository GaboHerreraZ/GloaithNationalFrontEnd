import { Component, OnInit } from '@angular/core';
import { AccessRateService } from '../../../services/rate/access.rate.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../../../utility/message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private _rateService:AccessRateService,
              private _toastrService:ToastrService) { }

  loading:boolean = false;
  show:boolean=false;
  rates:any;
  sub:Subscription;


  ngOnInit() {
    this.getRate();
  }


  getRate(){
   this.loading = true;
   this._rateService.getRate();
   this.sub = this._rateService.dataRate$.subscribe((res:any)=>{
      if(res.status ==200){
        this.rates = res.body.Data;
        this.loading = false;
        this.show = true;
        this._toastrService.success(Message.OK,'OK!');
      }
      else if (res.status ==0){
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
