import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectPlaylist } from '../playlist/playlist.selectors';
import { selectedTrack } from '../track/track.selectors';
import { authKey, AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>(authKey);

export const selectMode = createSelector(
  selectAuthState,
  (authState) => authState.mode
);

export const selectAuthUserId = createSelector(
  selectAuthState,
  (authState) => authState.id
);

export const selectedItem = createSelector(
  selectedTrack,
  selectPlaylist,
  (track, playlist) => {
    console.log(track);
    console.log(playlist);
    return track ? track : playlist;
  }
);
