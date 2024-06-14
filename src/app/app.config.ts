import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync('noop')]
};
=======
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())],


}
>>>>>>> 16aa7ff1b95d1fd420dddc087f1bd76ce5742357
