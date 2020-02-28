// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tickerUrl: 'https://blockchain.info/ticker',
  marketcapUrl: 'https://blockchain.info/q/marketcap',
  totalbcUrl: 'https://blockchain.info/q/totalbc', 
  daytransactioncountUrl: 'https://blockchain.info/q/24hrtransactioncount',
  daybtcsentUrl: 'https://blockchain.info/q/24hrbtcsent',
  hashrateUrl:'https://blockchain.info/q/hashrate',
  getdifficulty: 'https://blockchain.info/q/getdifficulty'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
