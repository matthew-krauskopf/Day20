import { createAction, props } from '@ngrx/store';
import { Playlist } from './playlist.entity';

export const loadPlaylists = createAction('[Side Bar] Load Playlists');

export const loadPlaylistsSuccess = createAction(
  '[Side Bar] Load Playlists Success',
  props<{ playlists: Playlist[] }>()
);

export const loadPlaylistsFail = createAction('[Side Bar] Load Playlists Fail');
