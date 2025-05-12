// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//TODO: Pick the correct url depending if its a mobile or web app
export const environment = {
  production: false,
  apiUrl: 'http://10.0.2.2:3000',
  socketUrl: 'http://10.0.2.2:3000',
  // Para probar en dispositivos físicos en la misma red WiFi:
  // apiUrl: 'http://192.168.1.58:3000',
  // socketUrl: 'http://192.168.1.58:3000',
  // Para probar en el navegador:
  // apiUrl: 'http://localhost:3000',
  // socketUrl: 'http://localhost:3000',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
