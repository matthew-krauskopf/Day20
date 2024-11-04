import { createReducer, on } from '@ngrx/store';
import { Permission } from '../../model/enum/permission';
import {
  changeMode,
  login,
  loginFailed,
  loginRejected,
  loginSuccessful,
  logout,
} from './auth.actions';
import { Playlist } from '../playlist/playlist.entity';
import { Track } from '../track/track.entity';

export interface AuthState {
  mode: string;
  id?: number | undefined;
  permission: Permission;
  selectedItem?: Track | Playlist;
  isLoading: boolean;
}

export const authState: AuthState = {
  mode: '',
  permission: Permission.NONE,
  isLoading: false,
};

export const authKey = 'auth';

export const authReducer = createReducer(
  authState,
  on(changeMode, (state, { mode }) => ({
    ...state,
    mode: state.mode == mode ? '' : mode,
  })),
  on(login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loginSuccessful, (state, { user }) => ({
    ...state,
    id: user.id,
    isLoading: false,
    permission: user.permission,
  })),
  on(loginFailed, loginRejected, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(logout, (state) => ({
    ...state,
    id: undefined,
  }))
  //on(loadTrack, loadPlaylist, (state, { item }) => ({
  //
  //})),
);
