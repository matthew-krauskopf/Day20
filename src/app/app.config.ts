import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { routes } from './app.routes';
import { AuthEffects } from './features/auth/auth.effects';
import { authReducer } from './features/auth/auth.state';
import { PlaylistEffects } from './features/playlist/playlist.effects';
import { playlistReducer } from './features/playlist/playlist.state';
import { TrackEffects } from './features/track/track.effects';
import { trackReducer } from './features/track/track.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(),
    provideEffects(AuthEffects, TrackEffects, PlaylistEffects),
    importProvidersFrom(
      StoreModule.forRoot({
        track: trackReducer,
        playlist: playlistReducer,
        auth: authReducer,
      })
    ),
  ],
};
