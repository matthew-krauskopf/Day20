import { createFeatureSelector, createSelector } from '@ngrx/store';
import { trackKey, trackState, TrackState } from './track.state';
import { selectPlaylist } from '../playlist/playlist.selectors';

export const selectTrackState = createFeatureSelector<TrackState>(trackKey);

export const selectTracks = createSelector(selectTrackState, (trackState) =>
  trackState.tracks.map((t) => {
    return {
      ...t,
      type: 'track',
      img: 'assets/{}.jpg'.replace('{}', String(t.id)),
    };
  })
);

export const selectedTrack = createSelector(
  selectTrackState,
  selectTracks,
  (state, tracks) => tracks.find((t) => t.id === state.selectedTrack)
);

export const selectPlaylistTracks = createSelector(
  selectTracks,
  selectPlaylist,
  (tracks, playlist) => tracks.filter((t) => playlist?.tracks.includes(t.id))
);

export const selectPlaylistLength = createSelector(
  selectPlaylistTracks,
  (tracks) =>
    tracks.map((t) => t.length).reduce((partialSum, a) => partialSum + a, 0)
);
