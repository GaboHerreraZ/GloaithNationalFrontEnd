import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkuRoutingModule } from './sku-routing.module';
import { SharedModule } from '../../../shared/module/shared.module';
import { SkuComponent } from './component/sku.component';

@NgModule({
  declarations: [SkuComponent],
  imports: [
    CommonModule,
    SkuRoutingModule,
    SharedModule
  ]
})
export class SkuModule { }
