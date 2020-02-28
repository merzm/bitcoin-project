import { Component } from '@angular/core';
import { BitcoinService } from '../shared/services/bitcoin.service';
import InfoCardData from '../shared/models/info-card-data';

@Component({
  selector: 'app-bitcoin-details',
  templateUrl: './bitcoin-details.page.html',
  styleUrls: ['./bitcoin-details.page.scss'],
})
export class BitcoinDetailsPage { 
  constructor(private bcService: BitcoinService) { }
  bitCoinInfoCards = [
    {
      title: 'Marktkapitalisierung',
      action: this.bcService.getMarketcap()
    } as InfoCardData,
    {
      title: 'Anzahl aller Bitcoins im Umlauf',
      action: this.bcService.getTotalbc()
    } as InfoCardData,
    {
      title: 'Anzahl der Transaktionen in den letzten 24h',
      action: this.bcService.getDaytransactioncount()
    } as InfoCardData,
    {
      title: 'Anzahl gesendeter Bitcoin in den letzten 24h',
      action: this.bcService.getDaybtcsent()
    } as InfoCardData,
    {
      title: 'Aktuelle Hashrate',
      action: this.bcService.getHashrate()
    } as InfoCardData,
    {
      title: 'Aktueller Schwierigkeitsgrad',
      action: this.bcService.getDifficulty()
    } as InfoCardData,
  ];
}
