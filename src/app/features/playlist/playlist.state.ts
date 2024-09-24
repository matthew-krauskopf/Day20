import { createReducer, on } from '@ngrx/store';
import {
  loadPlaylist,
  loadPlaylistsSuccess,
  unloadPlaylist,
} from './playlist.actions';
import { Playlist } from './playlist.entity';

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
  }))
);
