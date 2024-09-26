import { createReducer, on } from '@ngrx/store';
import {
  addPlaylist,
  deletePlaylist,
  loadPlaylist,
  loadPlaylistsSuccess,
  removeFromPlaylist,
  unloadPlaylist,
  updatePlaylist,
} from './playlist.actions';
import { Playlist } from './playlist.entity';
import {
  createNewPlaylist,
  markPlaylistDeleted,
  removeTrackFromPlaylist,
  updatePlaylistDetails,
} from './playlist.utils';

export interface PlaylistState {
  playlists: Playlist[];
  selectedPlaylist?: number;
}

export const playlistState: PlaylistState = {
  playlists: [],
};

export const playlistKey = 'playlist';

export const playlistReducer = createReducer(
  playlistState,
  on(loadPlaylistsSuccess, (state, { playlists }) => ({
    ...state,
    playlists: playlists,
  })),
  on(loadPlaylist, (state, { playlistId }) => ({
    ...state,
    selectedPlaylist: playlistId,
  })),
  on(unloadPlaylist, (state) => ({
    ...state,
    selectedPlaylist: undefined,
  })),
  on(removeFromPlaylist, (state, { id }) => ({
    ...state,
    playlists: removeTrackFromPlaylist(
      state.playlists,
      state.selectedPlaylist,
      id
    ),
  })),
  on(updatePlaylist, (state, { title, description }) => ({
    ...state,
    playlists: updatePlaylistDetails(
      state.playlists,
      state.selectedPlaylist,
      title,
      description
    ),
  })),
  on(deletePlaylist, (state) => ({
    ...state,
    playlists: markPlaylistDeleted(state.playlists, state.selectedPlaylist),
  })),
  on(addPlaylist, (state, { userId }) => ({
    ...state,
    playlists: [...state.playlists, createNewPlaylist(state.playlists, userId)],
  }))
);
