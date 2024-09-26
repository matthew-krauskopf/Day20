import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, unloadUsers } from './user.actions';
import { User } from './user.entity';
import { logout } from '../auth/auth.actions';

export interface UserState {
  users: User[];
}

export const userState: UserState = {
  users: [],
};

export const userKey = 'user';

export const userReducer = createReducer(
  userState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
  })),
  on(logout, (state) => ({
    ...state,
    users: [],
  }))
);
