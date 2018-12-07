import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './component/transaction.component';
import { SharedModule } from '../../../shared/module/shared.module';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule
  ],
  providers:[
  ]
})
export class TransactionModule { }
