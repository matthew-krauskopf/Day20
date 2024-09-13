import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  loadPlaylists,
  loadPlaylistsFail,
  loadPlaylistsSuccess,
} from './playlist.actions';
import { Playlist } from './playlist.entity';
import { PlaylistService } from './playlist.service';

@Injectable()
export class PlaylistEffects {
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
}
