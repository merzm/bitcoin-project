import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../shared/services/bitcoin.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  chart = [];
  constructor(private bcService: BitcoinService) { }

  ngOnInit() {
    // this.bcService.getChartData().subscribe(data => console.log(data));
  }

}
