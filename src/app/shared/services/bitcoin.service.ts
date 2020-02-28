import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BitcoinCurreniesData } from '../models/bitcoin-currencies-data';

@Injectable()
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getBitcoinCurrencies(): Observable<BitcoinCurreniesData>  {
    return this.http.get<BitcoinCurreniesData>(environment.tickerUrl);
  }

  getMarketcap(): Observable<number> {
    return this.http.get<number>(environment.marketcapUrl);
  }

  getTotalbc(): Observable<number> {
    return this.http.get<number>(environment.totalbcUrl);
  }

  getDaytransactioncount(): Observable<number> {
    return this.http.get<number>(environment.daytransactioncountUrl);
  }

  getDaybtcsent(): Observable<number> {
    return this.http.get<number>(environment.daybtcsentUrl);
  }

  getHashrate(): Observable<number> {
    return this.http.get<number>(environment.hashrateUrl);
  }

  getDifficulty(): Observable<number> {
    return this.http.get<number>(environment.getdifficultyUrl);
  }

  getChartData() {
    // https://api.blockchain.info/charts/transactions-per-second?timespan=1days&rollingAverage=8hours&format=json
  }
}
