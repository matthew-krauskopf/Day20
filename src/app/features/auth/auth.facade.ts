import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMode } from './auth.selectors';
import { changeMode } from './auth.actions';

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
}
