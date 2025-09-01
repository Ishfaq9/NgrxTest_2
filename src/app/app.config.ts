import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './Counter/state/counter.reducer';
import { appReducers } from './store/app.state';
import { provideRouterStore } from '@ngrx/router-store';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideStore(),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        features: {
            pause: false,
            lock: true,
            persist: true
        }
    }), provideRouterStore()
        , provideHttpClient()
    ]
};
