import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addPlaylist,
  deletePlaylist,
  loadPlaylist,
  loadPlaylists,
  openEditPlaylistModal,
  removeFromPlaylist,
  unloadPlaylist,
} from './playlist.actions';
import {
  selectPlaylist,
  selectPlaylistAuthor,
  selectPlaylists,
} from './playlist.selectors';
import { Playlist } from './playlist.entity';

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
    this.store.dispatch(loadPlaylist({ playlistId: id }));
  }

  unloadPlaylist() {
    this.store.dispatch(unloadPlaylist());
  }

  removeFromPlaylist(trackId: number) {
    this.store.dispatch(removeFromPlaylist({ id: trackId }));
  }

  editPlaylistDetails(playlist: Playlist) {
    this.store.dispatch(openEditPlaylistModal({ playlist: playlist }));
  }

  deletePlaylist() {
    this.store.dispatch(deletePlaylist());
  }

  addPlaylist(userId: number) {
    this.store.dispatch(addPlaylist({ userId }));
  }
}
