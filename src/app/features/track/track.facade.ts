import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addTrack,
  deleteTrack,
  loadTrack,
  loadTracks,
  openEditTrackModal,
  unloadTrack,
} from './track.actions';
import {
  currentTrackLengthMinutes,
  currentTrackLengthSeconds,
  isProcessing,
  playlistNumTracks,
  selectedTrack,
  selectPlaylistLength,
  selectPlaylistTracks,
  selectTracks,
  tracksExist,
} from './track.selectors';
import { Track } from './track.entity';
import { loadPlaylists } from '../playlist/playlist.actions';

@Injectable({
  providedIn: 'root',
})
export class TrackFacade {
  tracks$;
  playlistTracks$;
  playlistLength$;
  selectedTrack$;
  currentTrackLengthMinutes$;
  currentTrackLengthSeconds$;
  playlistNumTracks$;
  isProcessing$;
  tracksExist$;

  constructor(private store: Store) {
    this.tracks$ = this.store.select(selectTracks);
    this.playlistTracks$ = this.store.select(selectPlaylistTracks);
    this.playlistLength$ = this.store.select(selectPlaylistLength);
    this.selectedTrack$ = this.store.select(selectedTrack);
    this.currentTrackLengthMinutes$ = this.store.select(
      currentTrackLengthMinutes
    );
    this.currentTrackLengthSeconds$ = this.store.select(
      currentTrackLengthSeconds
    );
    this.playlistNumTracks$ = this.store.select(playlistNumTracks);
    this.isProcessing$ = this.store.select(isProcessing);
    this.tracksExist$ = this.store.select(tracksExist);
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

  deleteTrack(trackId: number) {
    this.store.dispatch(deleteTrack({ trackId }));
  }

  editTrack(track: Track) {
    this.store.dispatch(openEditTrackModal({ track }));
  }

  addTrack() {
    this.store.dispatch(addTrack());
  }
}
