import { Component, OnInit, Input } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import InfoCardData from '../../models/info-card-data';

@Component({
  selector: 'app-bitcoin-info-card',
  templateUrl: './bitcoin-info-card.component.html',
  styleUrls: ['./bitcoin-info-card.component.scss'],
})
export class BitcoinInfoCardComponent implements OnInit {
  @Input() card: InfoCardData;
  data: number;
  constructor(private bcService: BitcoinService) { }

  ngOnInit() {
    this.card.action.subscribe(data => this.data = data);
  }
}
