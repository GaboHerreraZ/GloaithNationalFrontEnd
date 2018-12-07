import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './services/transaction/transaction.service';
import { AccessTransactionService } from './services/transaction/access.transaction.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AccessRateService } from './services/rate/access.rate.service';
import { RateService } from './services/rate/rate.service';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { BankersRoundigPipe } from './pipe/bankers-roundig.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({positionClass: 'toast-top-right',preventDuplicates: true}),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  }),
   
  ],
  providers: [TransactionService,
              AccessTransactionService,
              RateService,
              AccessRateService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
