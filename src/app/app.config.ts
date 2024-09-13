import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { routes } from './app.routes';
import { TrackEffects } from './features/track/track.effects';
import { trackReducer } from './features/track/track.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(),
    provideEffects(TrackEffects),
    importProvidersFrom(
      StoreModule.forRoot({
        track: trackReducer,
      })
    ),
  ],
};
