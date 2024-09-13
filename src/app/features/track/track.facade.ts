import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTracks } from './track.selectors';
import { loadTracks } from './track.actions';

@Injectable({
  providedIn: 'root',
})
export class TrackFacade {
  tracks$;

  constructor(private store: Store) {
    this.tracks$ = this.store.select(selectTracks);
  }

  loadTracks() {
    this.store.dispatch(loadTracks());
  }
}
