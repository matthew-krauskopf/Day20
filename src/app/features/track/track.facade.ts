import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectedTrack,
  selectPlaylistLength,
  selectPlaylistTracks,
  selectTracks,
} from './track.selectors';
import { loadTrack, loadTracks, unloadTrack } from './track.actions';

@Injectable({
  providedIn: 'root',
})
export class TrackFacade {
  tracks$;
  playlistTracks$;
  playlistLength$;
  selectedTrack$;

  constructor(private store: Store) {
    this.tracks$ = this.store.select(selectTracks);
    this.playlistTracks$ = this.store.select(selectPlaylistTracks);
    this.playlistLength$ = this.store.select(selectPlaylistLength);
    this.selectedTrack$ = this.store.select(selectedTrack);
  }

  loadTracks() {
    this.store.dispatch(loadTracks());
  }

  loadTrack(trackId: number) {
    this.store.dispatch(loadTrack({ id: trackId }));
  }

  unloadTrack() {
    this.store.dispatch(unloadTrack());
  }
}
