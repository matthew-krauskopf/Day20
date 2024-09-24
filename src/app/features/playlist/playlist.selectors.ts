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

export const selectPlaylist = createSelector(
  selectPlaylistState,
  (playlistState) =>
    playlistState.playlists.find((p) => p.id == playlistState.selectedPlaylist)
);
