import { createReducer, on } from '@ngrx/store';
import { Permission } from '../../model/enum/permission';
import { changeMode, loginSuccessful, logout } from './auth.actions';

export interface AuthState {
  mode: string;
  id?: number | undefined;
  permission: Permission;
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
);
