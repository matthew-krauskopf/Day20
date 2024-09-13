import { createReducer, on } from '@ngrx/store';
import { loadPlaylistsSuccess } from './playlist.actions';
import { Playlist } from './playlist.entity';

export interface PlaylistState {
  playlists: Playlist[];
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
  }))
);
