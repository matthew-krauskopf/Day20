import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeMode, login, logout, relogin } from './auth.actions';
import {
  selectAuthState,
  selectAuthUserId,
  selectMode,
} from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  mode$;
  authUserId$;

  constructor(private store: Store) {
    this.mode$ = this.store.select(selectMode);
    this.authUserId$ = this.store.select(selectAuthUserId);
  }

  changeMode(mode: string) {
    this.store.dispatch(changeMode({ mode }));
  }

  login(username: string, password: string) {
    this.store.dispatch(login({ username, password }));
  }

  performCachedLogin() {
    this.store.dispatch(relogin());
  }

  logout() {
    this.store.dispatch(logout());
  }
}
