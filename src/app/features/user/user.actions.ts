import { createAction, props } from '@ngrx/store';
import { User } from './user.entity';

export const loadUsers = createAction('[Background] Load Users');

export const loadUsersSuccess = createAction(
  '[Background] Load Users Successful',
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction('[Background] Load Users Fail');

export const unloadUsers = createAction('[Logout] Unload Users');
