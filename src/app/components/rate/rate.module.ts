import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateRoutingModule } from './rate.routing.module';
import { RateComponent } from './component/rate.component';
import { SharedModule } from '../../shared/module/shared.module';

@NgModule({
  declarations: [RateComponent],
  imports: [
    CommonModule,
    RateRoutingModule,
    SharedModule
  ]
})
export class RateModule { }
