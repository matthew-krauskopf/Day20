import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authKey, AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>(authKey);

export const selectMode = createSelector(
  selectAuthState,
  (authState) => authState.mode
);

export const selectAuthUserId = createSelector(
  selectAuthState,
  (authState) => authState.id
);
