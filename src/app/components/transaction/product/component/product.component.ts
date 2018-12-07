import { Component, OnInit } from '@angular/core';
import { AccessTransactionService } from '../../../../services/transaction/access.transaction.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../../../../utility/message';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _accesTrans:AccessTransactionService,
              private _toastrService:ToastrService) { }

  ngOnInit() {
  this.rate= new FormGroup({
    currency: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(3)])
  });
  }
  
  rate:FormGroup;

  currency:string = null;
  total:any;
  show:boolean=false;
  loading:boolean = false;


  getTotal(){
    this.show =false;
    if(this.rate.invalid){
      this._toastrService.warning("Seleccione una moneda","Ups!");
      return;
    }
    this.currency = this.rate.controls['currency'].value;
    this.loading = true;
    this._accesTrans.getTotal(this.rate.value);
    this._accesTrans.dataTotal$.subscribe((res:any)=>{
      if(res.status ==200){
        this.total = res.body.Data;
        this.show = true;
        this.loading = false;
        this._toastrService.success(Message.OK,'OK!');
      }else if (res.status ==0){
        this._toastrService.error("No hay comunicación con los servicios del Back-End","ERROR!");
        this.loading = false;
      }else{
        this._toastrService.error(res.error.Data,'Error!');
        this.loading = false;
      }
    });
  }

}
