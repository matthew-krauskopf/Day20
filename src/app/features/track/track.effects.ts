import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, filter, map, of, tap } from 'rxjs';
import { EditTrackComponent } from '../../components/edit-track/edit-track.component';
import { deleteTrack, updateTrack } from '../track/track.actions';
import {
  loadTrack,
  loadTracks,
  loadTracksFail,
  loadTracksSuccess,
  openEditTrackModal,
} from './track.actions';
import { Track } from './track.entity';
import { TrackService } from './track.service';

@Injectable()
export class TrackEffects {
  router: Router = inject(Router);
  tracksService: TrackService = inject(TrackService);
  snackbar: MatSnackBar = inject(MatSnackBar);
  dialog: MatDialog = inject(MatDialog);

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

  deleteTrack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteTrack),
        map(() => {
          this.snackbar.open('Track successfully deleted', 'Dismiss', {
            duration: 3000,
          });
          this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false }
  );

  openEditTrackModal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(openEditTrackModal),
      exhaustMap((payload) =>
        this.dialog
          .open(EditTrackComponent, {
            data: {
              track: payload.track,
            },
          })
          .afterClosed()
          .pipe(
            filter((form) => !!form),
            map((form: FormGroup) => {
              return updateTrack({
                title: form.value.title,
                artist: form.value.artist,
                album: form.value.album,
              });
            })
          )
      )
    )
  );
}
