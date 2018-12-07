import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankersRoundigPipe } from '../../pipe/bankers-roundig.pipe';

@NgModule({
  declarations: [BankersRoundigPipe],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  }),
  FormsModule,
  ReactiveFormsModule
  ],
  exports:[
    NgxPaginationModule,
    NgxLoadingModule,
    FormsModule,
    ReactiveFormsModule,
    BankersRoundigPipe
  ]
})
export class SharedModule { }
