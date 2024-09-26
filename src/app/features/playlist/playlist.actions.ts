import { createAction, props } from '@ngrx/store';
import { Playlist } from './playlist.entity';
import { FormGroup } from '@angular/forms';

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

export const removeFromPlaylist = createAction(
  '[Playlist Detail] Remove From Playlist',
  props<{ id: number }>()
);

export const openEditPlaylistModal = createAction(
  '[Edit Playlist] Open Modal',
  props<{ playlist: Playlist }>()
);

export const updatePlaylist = createAction(
  '[Edit Playlist] Save Playlist Changes',
  props<{ title: string; description: string }>()
);
