import { createReducer, on } from '@ngrx/store';
import {
  addTrack,
  deleteTrack,
  loadTrack,
  loadTracksSuccess,
  unloadTrack,
  updateTrack,
} from './track.actions';
import { Track } from './track.entity';
import {
  createNewTrack,
  markTrackDeleted,
  updateTrackInfo,
} from './track.utils';

export interface TrackState {
  tracks: Track[];
  selectedTrack?: number;
}

export const trackState: TrackState = {
  tracks: [],
};

export const trackKey = 'track';

export const trackReducer = createReducer(
  trackState,
  on(loadTracksSuccess, (state, { tracks }) => ({
    ...state,
    tracks: tracks,
  })),
  on(loadTrack, (state, { id }) => ({
    ...state,
    selectedTrack: id,
  })),
  on(unloadTrack, (state) => ({
    ...state,
    selectedTrack: undefined,
  })),
  on(deleteTrack, (state, { trackId }) => ({
    ...state,
    tracks: markTrackDeleted(state.tracks, trackId),
  })),
  on(updateTrack, (state, { title, artist, album }) => ({
    ...state,
    tracks: updateTrackInfo(
      state.tracks,
      state.selectedTrack,
      title,
      artist,
      album
    ),
  })),
  on(addTrack, (state) => ({
    ...state,
    tracks: [...state.tracks, createNewTrack(state.tracks)],
  }))
);
