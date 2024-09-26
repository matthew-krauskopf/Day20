import { createAction, props } from '@ngrx/store';
import { User } from './user.entity';

export const loadUsers = createAction('[Side Bar] Load Users');

export const loadUsersSuccess = createAction(
  '[Side Bar] Load Users Successful',
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction('[Side Bar] Load Users Fail');
