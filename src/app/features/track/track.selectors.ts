import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectPlaylist } from '../playlist/playlist.selectors';
import { trackKey, TrackState } from './track.state';

export const selectTrackState = createFeatureSelector<TrackState>(trackKey);

export const selectTracks = createSelector(selectTrackState, (trackState) =>
  trackState.tracks
    .filter((t) => !t.deleted)
    .map((t) => {
      return {
        ...t,
        type: 'track',
        img: t.img ?? 'assets/{}.jpg'.replace('{}', String(t.id)),
      };
    })
);

export const tracksExist = createSelector(
  selectTracks,
  (tracks) => tracks.length > 0
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

export const currentTrackLengthMinutes = createSelector(
  selectedTrack,
  (track) => (track ? Math.floor(track.length / 60) : 0)
);

export const currentTrackLengthSeconds = createSelector(
  selectedTrack,
  (track) => (track ? track.length % 60 : 0)
);

export const playlistNumTracks = createSelector(
  selectPlaylistTracks,
  (tracks) => (tracks ? tracks.length : 0)
);

export const isProcessing = createSelector(
  selectTrackState,
  (state) => state.isDeleting || state.isLoading || state.isSaving
);
