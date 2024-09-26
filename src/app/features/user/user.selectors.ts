import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userKey, UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>(userKey);

export const selectUsers = createSelector(
  selectUserState,
  (userState) => userState.users
);
