import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadPlaylist,
  loadPlaylists,
  unloadPlaylist,
} from './playlist.actions';
import {
  selectPlaylist,
  selectPlaylistAuthor,
  selectPlaylists,
} from './playlist.selectors';

@Injectable({
  providedIn: 'root',
})
export class PlaylistFacade {
  playlists$;
  playlist$;
  playlistAuthor$;

  constructor(private store: Store) {
    this.playlists$ = this.store.select(selectPlaylists);
    this.playlist$ = this.store.select(selectPlaylist);
    this.playlistAuthor$ = this.store.select(selectPlaylistAuthor);
  }

  loadPlaylists() {
    this.store.dispatch(loadPlaylists());
  }

  loadPlaylist(id: number) {
    console.log('Firing ' + id);
    this.store.dispatch(loadPlaylist({ playlistId: id }));
  }

  unloadPlaylist() {
    this.store.dispatch(unloadPlaylist());
  }
}
