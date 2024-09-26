import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { loginSuccessful } from '../auth/auth.actions';
import { loadUsersFail, loadUsersSuccess } from './user.actions';
import { User } from './user.entity';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  usersService: UserService = inject(UserService);

  constructor(private actions$: Actions) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessful),
      exhaustMap(() =>
        this.usersService.getUsers().pipe(
          map((users: User[]) => loadUsersSuccess({ users: users })),
          catchError(() => of(loadUsersFail()))
        )
      )
    )
  );
}
