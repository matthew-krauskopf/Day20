import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectPlaylistLength,
  selectPlaylistTracks,
  selectTracks,
} from './track.selectors';
import { loadTracks } from './track.actions';

@Injectable({
  providedIn: 'root',
})
export class TrackFacade {
  tracks$;
  playlistTracks$;
  playlistLength$;

  constructor(private store: Store) {
    this.tracks$ = this.store.select(selectTracks);
    this.playlistTracks$ = this.store.select(selectPlaylistTracks);
    this.playlistLength$ = this.store.select(selectPlaylistLength);
  }

  loadTracks() {
    this.store.dispatch(loadTracks());
  }
}
