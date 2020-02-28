import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../shared/services/bitcoin.service';
import { BitcoinCurreniesData } from '../shared/models/bitcoin-currencies-data';
import BitcoinCurrenyData from '../shared/models/bitcoin-currency-data';

@Component({
  selector: 'app-bitcoin-converter',
  templateUrl: './bitcoin-converter.page.html',
  styleUrls: ['./bitcoin-converter.page.scss'],
})
export class BitcoinConverterPage implements OnInit {
  currencies: BitcoinCurreniesData;
  currencyValue: number = 1;
  currency = "EUR";
  bitCoinValue: number;
  constructor(private bcService: BitcoinService) { }

  onChangeCurrencyValue(event) {
    this.calculateBitCoinValue();
  }

  onChangeCurrency(event) {
    this.calculateBitCoinValue();
  }

  calculateBitCoinValue() {
    this.bitCoinValue = this.currencyValue * this.currencies[this.currency].buy;
  }

  ngOnInit() {
    this.bcService.getBitcoinCurrencies().subscribe(data => {
      this.currencies = data;
      this.calculateBitCoinValue();
    });
  }

}
