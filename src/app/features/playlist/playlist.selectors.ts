import { createFeatureSelector, createSelector } from '@ngrx/store';
import { playlistKey, PlaylistState } from './playlist.state';

export const selectPlaylistState =
  createFeatureSelector<PlaylistState>(playlistKey);

export const selectPlaylists = createSelector(
  selectPlaylistState,
  (playlistState) =>
    playlistState.playlists.map((p) => {
      return { ...p, type: 'playlist' };
    })
);
