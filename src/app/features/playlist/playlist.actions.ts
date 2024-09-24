import { createAction, props } from '@ngrx/store';
import { Playlist } from './playlist.entity';

export const loadPlaylists = createAction('[Side Bar] Load Playlists');

export const loadPlaylistsSuccess = createAction(
  '[Side Bar] Load Playlists Success',
  props<{ playlists: Playlist[] }>()
);

export const loadPlaylistsFail = createAction('[Side Bar] Load Playlists Fail');

export const loadPlaylist = createAction(
  '[Main Panel] Load Playlist',
  props<{ playlistId: number }>()
);

export const unloadPlaylist = createAction('[Main Panel] Unload Playlist');
