import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeMode, login } from './auth.actions';
import { selectMode } from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  mode$;

  constructor(private store: Store) {
    this.mode$ = this.store.select(selectMode);
  }

  changeMode(mode: string) {
    this.store.dispatch(changeMode({ mode }));
  }

  login(username: string, password: string) {
    console.log(username, password);
    this.store.dispatch(login({ username, password }));
  }
}
