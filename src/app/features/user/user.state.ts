import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersFail,
  loadUsersSuccess,
  unloadUsers,
} from './user.actions';
import { User } from './user.entity';
import { logout } from '../auth/auth.actions';
import { deletePlaylist } from '../playlist/playlist.actions';

export interface UserState {
  users: User[];
  isLoading: boolean;
  isSaving: boolean;
  isDeleting: boolean;
}

export const userState: UserState = {
  users: [],
  isLoading: false,
  isSaving: false,
  isDeleting: false,
};

export const userKey = 'user';

export const userReducer = createReducer(
  userState,
  on(loadUsers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    isLoading: false,
    users: users,
  })),
  on(loadUsersFail, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(logout, (state) => ({
    ...state,
    users: [],
  }))
);
