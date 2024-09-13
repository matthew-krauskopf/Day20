import { createFeatureSelector, createSelector } from '@ngrx/store';
import { trackKey, TrackState } from './track.state';

export const selectTrackState = createFeatureSelector<TrackState>(trackKey);

export const selectTracks = createSelector(selectTrackState, (trackState) =>
  trackState.tracks.map((t) => {
    return { ...t, type: 'track' };
  })
);
