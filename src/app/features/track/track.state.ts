import { createReducer, on } from '@ngrx/store';
import { loadTrack, loadTracksSuccess, unloadTrack } from './track.actions';
import { Track } from './track.entity';

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
  }))
);
