import { createFeatureSelector, createSelector } from '@ngrx/store';
import { playlistKey, PlaylistState } from './playlist.state';
import { selectUsers } from '../user/user.selectors';

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

export const selectPlaylistAuthor = createSelector(
  selectUsers,
  selectPlaylist,
  (users, playlist) => users.find((u) => u.id === playlist?.createdBy)
);
