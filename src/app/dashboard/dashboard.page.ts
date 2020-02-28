import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../shared/services/bitcoin.service';
import BitcoinCurrenyData from '../shared/models/bitcoin-currency-data';
import { BitcoinCurreniesData } from '../shared/models/bitcoin-currencies-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private currenciesData: BitcoinCurreniesData;
  constructor(private bcService: BitcoinService) { }

  ngOnInit(){
    this.bcService.getBitcoinCurrencies().subscribe(data => this.currenciesData = data);
  }

}
