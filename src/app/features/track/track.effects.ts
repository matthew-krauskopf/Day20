import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import {
  loadTrack,
  loadTracks,
  loadTracksFail,
  loadTracksSuccess,
} from './track.actions';
import { Track } from './track.entity';
import { TrackService } from './track.service';
import { Router } from '@angular/router';

@Injectable()
export class TrackEffects {
  router: Router = inject(Router);
  tracksService: TrackService = inject(TrackService);
  snackbar: MatSnackBar = inject(MatSnackBar);

  constructor(private actions$: Actions) {}

  loadTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTracks),
      exhaustMap(() =>
        this.tracksService.getTracks().pipe(
          map((tracks: Track[]) => loadTracksSuccess({ tracks: tracks })),
          catchError(() => of(loadTracksFail()))
        )
      )
    )
  );

  loadTracksFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadTracksFail),
        map(() =>
          this.snackbar.open(
            'Network Error: Tracks failed to load',
            'Dismiss',
            {
              duration: 5000,
            }
          )
        )
      ),
    { dispatch: false }
  );

  loadTrack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadTrack),
        tap((payload) => {
          this.router.navigate(['dashboard', 'tracks', payload.id]);
        })
      ),
    { dispatch: false }
  );
}
