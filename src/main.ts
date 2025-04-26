import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from './environments/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyD7hWNdyHq8SEwZN_y6De2ASYrs1rCo6mc',
  authDomain: 'appdeveloper-b0a81.firebaseapp.com',
  projectId: 'appdeveloper-b0a81',
  storageBucket: 'appdeveloper-b0a81.firebasestorage.app',
  messagingSenderId: '1050971189495',
  appId: '1:1050971189495:web:3174fee57e6d31d8fc23f2',
  measurementId: 'G-14PXBPZ4FB',
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
