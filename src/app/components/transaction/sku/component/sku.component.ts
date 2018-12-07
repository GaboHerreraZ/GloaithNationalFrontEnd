import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccessTransactionService } from '../../../../services/transaction/access.transaction.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../../../../utility/message';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.css']
})
export class SkuComponent implements OnInit {

  constructor(private _accessTransc:AccessTransactionService,
              private _toastr:ToastrService) { }

  show:boolean=false;
  loading:boolean=false;
  product:FormGroup;
  total:any;
  ngOnInit() {
    this.product= new FormGroup({
      sku: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(10)])
    });
  }


  getTotalSku(){
    this.show =false;
    if(this.product.invalid){
      this._toastr.warning("Ingrese un SKU correcto","Ups!");
      return;
    }
    this.loading = true;
    this._accessTransc.getSku(this.product.controls["sku"].value);
    this._accessTransc.dataSku$.subscribe((res:any)=>{
      if(res.status ==200){
        this.total = res.body.Data;
        this.show = true;
        this.loading = false;
        this._toastr.success(Message.OK,'OK!');
      }else if (res.status ==0){
        this._toastr.error("No hay comunicación con los servicios del Back-End","ERROR!");
        this.loading = false;
      }else{
        this._toastr.error(res.error.Data,'Error!');
        this.loading = false;
      }
    });
  }

}
