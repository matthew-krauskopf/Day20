import { createReducer, on } from '@ngrx/store';
import { loadTracksSuccess } from './track.actions';
import { Track } from './track.entity';

export interface TrackState {
  tracks: Track[];
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
  }))
);
