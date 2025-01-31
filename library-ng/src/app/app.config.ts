import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(
        {
          "apiKey":"AIzaSyAMfrocCYIR9411DpaEYbvHI3mEweM1JwE",
          "authDomain":"run-web.firebaseapp.com",
        })),
    provideAuth(() => getAuth()),
  ]
};
