import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  login,
  loginFailed,
  loginRejected,
  loginSuccessful,
} from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  snackbar: MatSnackBar = inject(MatSnackBar);

  constructor(private actions$: Actions) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((payload) =>
        this.authService.getUser(payload.username).pipe(
          map((auth) =>
            auth.length > 0 && auth[0].password === payload.password
              ? loginSuccessful({ user: auth[0] })
              : loginRejected()
          ),
          catchError(() => of(loginFailed()))
        )
      )
    )
  );

  loginSuccessful$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessful),
        map(() => this.router.navigate(['dashboard']))
      ),
    { dispatch: false }
  );

  loginFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailed),
        map(() => {
          this.snackbar.open('Network Error: Please Try Again', 'Dismiss', {
            duration: 2000,
          });
        })
      ),
    { dispatch: false }
  );

  loginRejected$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginRejected),
        map(() => {
          this.snackbar.open(
            'Login failed. Please check crednetials and try again',
            'Dismiss',
            {
              duration: 2000,
            }
          );
        })
      ),
    { dispatch: false }
  );
}
