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
import { Playlist } from './playlist.entity';
import {
  isProcessing,
  playlistsExist,
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
  isProcessing$;
  playlistsExist$;

  constructor(private store: Store) {
    this.playlists$ = this.store.select(selectPlaylists);
    this.playlist$ = this.store.select(selectPlaylist);
    this.playlistAuthor$ = this.store.select(selectPlaylistAuthor);
    this.isProcessing$ = this.store.select(isProcessing);
    this.playlistsExist$ = this.store.select(playlistsExist);
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
