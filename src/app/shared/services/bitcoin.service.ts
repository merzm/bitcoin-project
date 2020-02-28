import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BitcoinCurreniesData } from '../models/bitcoin-currencies-data';

@Injectable()
export class BitcoinService {
  private tickerUrl = environment.tickerUrl;

  constructor(private http: HttpClient) { }

  getBitcoinCurrencies(): Observable<BitcoinCurreniesData>  {
    return this.http.get<BitcoinCurreniesData>(this.tickerUrl);
  }
}
