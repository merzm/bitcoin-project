import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitcoinConverterPage } from './bitcoin-converter.page';

const routes: Routes = [
  {
    path: '',
    component: BitcoinConverterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitcoinConverterPageRoutingModule {}
