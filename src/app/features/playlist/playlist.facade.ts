import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPlaylists } from './playlist.selectors';
import { loadPlaylists } from './playlist.actions';

@Injectable({
  providedIn: 'root',
})
export class PlaylistFacade {
  playlists$;

  constructor(private store: Store) {
    this.playlists$ = this.store.select(selectPlaylists);
  }

  loadPlaylists() {
    this.store.dispatch(loadPlaylists());
  }
}
