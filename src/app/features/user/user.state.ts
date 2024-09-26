import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess } from './user.actions';
import { User } from './user.entity';

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
  }))
);
