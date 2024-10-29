import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(
        {
          "projectId":"run-web",
          "appId":"1:869102415447:web:2773f423e767419dfbbd12",
          "storageBucket":"run-web.appspot.com",
          "locationId":"us-east4",
          "apiKey":"AIzaSyAA21NTAgAct2HZJj-Kd-OROGZXlkSqVd4",
          "authDomain":"run-web.firebaseapp.com",
          "messagingSenderId":"869102415447",
          "measurementId":"G-H3YTWYL0DY"
        })),
    provideAuth(() => getAuth()),
  ]
};
