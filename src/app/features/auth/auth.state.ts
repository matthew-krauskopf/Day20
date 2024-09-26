import { createReducer, on } from '@ngrx/store';
import { Permission } from '../../model/enum/permission';
import { changeMode, loginSuccessful, logout } from './auth.actions';
import { Playlist } from '../playlist/playlist.entity';
import { Track } from '../track/track.entity';
import { loadTrack } from '../track/track.actions';
import { loadPlaylist } from '../playlist/playlist.actions';

export interface AuthState {
  mode: string;
  id?: number | undefined;
  permission: Permission;
  selectedItem?: Track | Playlist;
}

export const authState: AuthState = {
  mode: '',
  permission: Permission.NONE,
};

export const authKey = 'auth';

export const authReducer = createReducer(
  authState,
  on(changeMode, (state, { mode }) => ({
    ...state,
    mode: state.mode == mode ? '' : mode,
  })),
  on(loginSuccessful, (state, { user }) => ({
    ...state,
    id: user.id,
    permission: user.permission,
  })),
  on(logout, (state) => ({
    ...state,
    id: undefined,
  }))
  //on(loadTrack, loadPlaylist, (state, { item }) => ({
  //
  //})),
);
