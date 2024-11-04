import { createReducer, on } from '@ngrx/store';
import {
  addTrack,
  deleteTrack,
  loadTrack,
  loadTracks,
  loadTracksFail,
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
  isLoading: boolean;
  isSaving: boolean;
  isDeleting: boolean;
}

export const trackState: TrackState = {
  tracks: [],
  isLoading: false,
  isSaving: false,
  isDeleting: false,
};

export const trackKey = 'track';

export const trackReducer = createReducer(
  trackState,
  on(loadTracks, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadTracksSuccess, (state, { tracks }) => ({
    ...state,
    isLoading: false,
    tracks: tracks,
  })),
  on(loadTracksFail, (state) => ({
    ...state,
    isLoading: false,
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
  on(updateTrack, (state, { title, artist, album, year }) => ({
    ...state,
    tracks: updateTrackInfo(
      state.tracks,
      state.selectedTrack,
      title,
      artist,
      album,
      year
    ),
  })),
  on(addTrack, (state) => ({
    ...state,
    tracks: [...state.tracks, createNewTrack(state.tracks)],
  }))
);
