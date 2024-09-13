import { createReducer, on } from '@ngrx/store';
import { Permission } from '../../model/enum/permission';
import { changeMode } from './auth.actions';

export interface AuthState {
  mode: string;
  userId: number;
  permission: Permission;
}

export const authState: AuthState = {
  mode: '',
  userId: -1,
  permission: Permission.NONE,
};

export const authKey = 'auth';

export const authReducer = createReducer(
  authState,
  on(changeMode, (state, { mode }) => ({
    ...state,
    mode: state.mode == mode ? '' : mode,
  }))
);
