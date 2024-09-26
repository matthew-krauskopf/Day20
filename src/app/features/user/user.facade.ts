import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers } from './user.selectors';
import { loadUsers } from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  users$;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
  }

  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}
