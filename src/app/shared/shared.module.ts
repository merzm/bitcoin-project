import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BitcoinService } from './services/bitcoin.service';
import { MarketcapComponent } from './components/marketcap/marketcap.component';
import { IonicModule } from '@ionic/angular';
import { BitcoinInfoCardComponent } from './components/bitcoin-info-card/bitcoin-info-card.component';



@NgModule({
  declarations: [
    BitcoinInfoCardComponent
  ],
  exports: [
    BitcoinInfoCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ], 
  providers: [
    BitcoinService
  ]
})
export class SharedModule { }
