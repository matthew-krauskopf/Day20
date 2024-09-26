import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectUsers } from '../user/user.selectors';
import { playlistKey, PlaylistState } from './playlist.state';

export const selectPlaylistState =
  createFeatureSelector<PlaylistState>(playlistKey);

export const selectPlaylists = createSelector(
  selectPlaylistState,
  (playlistState) =>
    playlistState.playlists
      .filter((p) => p.deleted != true)
      .map((p) => {
        return { ...p, type: 'playlist' };
      })
);

export const selectPlaylist = createSelector(
  selectPlaylistState,
  selectPlaylists,
  (state, playlists) => playlists.find((p) => p.id == state.selectedPlaylist)
);

export const selectPlaylistAuthor = createSelector(
  selectUsers,
  selectPlaylist,
  (users, playlist) => users.find((u) => u.id === playlist?.createdBy)
);
