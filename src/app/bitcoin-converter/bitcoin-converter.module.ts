import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitcoinConverterPageRoutingModule } from './bitcoin-converter-routing.module';

import { BitcoinConverterPage } from './bitcoin-converter.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoinConverterPageRoutingModule,
    SharedModule
  ],
  declarations: [BitcoinConverterPage]
})
export class BitcoinConverterPageModule {}
