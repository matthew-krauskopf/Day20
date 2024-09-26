import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import {
  loadPlaylist,
  loadPlaylists,
  loadPlaylistsFail,
  loadPlaylistsSuccess,
} from './playlist.actions';
import { Playlist } from './playlist.entity';
import { PlaylistService } from './playlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PlaylistEffects {
  router: Router = inject(Router);
  snackbar: MatSnackBar = inject(MatSnackBar);
  playlistsService: PlaylistService = inject(PlaylistService);

  constructor(private actions$: Actions) {}

  loadPlaylists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlaylists),
      exhaustMap(() =>
        this.playlistsService.getPlaylists().pipe(
          map((playlists: Playlist[]) =>
            loadPlaylistsSuccess({ playlists: playlists })
          ),
          catchError(() => of(loadPlaylistsFail()))
        )
      )
    )
  );

  loadPlaylist$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPlaylist),
        tap((payload) => {
          this.router.navigate(['dashboard', 'playlists', payload.playlistId]);
        })
      ),
    { dispatch: false }
  );

  loadPlaylistsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPlaylistsFail),
        map(() =>
          this.snackbar.open(
            'Network Error: Playlists failed to load',
            'Dismiss',
            {
              duration: 5000,
            }
          )
        )
      ),
    { dispatch: false }
  );
}
