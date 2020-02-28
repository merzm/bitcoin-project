import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'bitcoin-details',
    loadChildren: () => import('./bitcoin-details/bitcoin-details.module').then( m => m.BitcoinDetailsPageModule)
  },
  {
    path: 'bitcoin-converter',
    loadChildren: () => import('./bitcoin-converter/bitcoin-converter.module').then( m => m.BitcoinConverterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
