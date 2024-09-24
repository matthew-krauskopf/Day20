import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { PlaylistFacade } from '../../features/playlist/playlist.facade';
import { TrackFacade } from '../../features/track/track.facade';
import { map } from 'rxjs';

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.scss',
})
export class PlaylistDetailComponent implements OnInit, OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);

  trackFacade: TrackFacade = inject(TrackFacade);
  playlistFacade: PlaylistFacade = inject(PlaylistFacade);
  //userFacade : UserFacade = inject(UserFacade);

  playlistTracks$;
  playlistLengthMinutes$;
  playlistLengthSeconds$;

  constructor() {
    this.playlistTracks$ = this.trackFacade.playlistTracks$;
    this.playlistLengthMinutes$ = this.trackFacade.playlistLength$.pipe(
      map((seconds) => Math.floor(seconds / 60))
    );
    this.playlistLengthSeconds$ = this.trackFacade.playlistLength$.pipe(
      map((seconds) => seconds % 60)
    );
  }

  ngOnInit() {
    this.playlistFacade.loadPlaylist(this.route.snapshot.params['id']);
  }

  ngOnDestroy() {
    this.playlistFacade.unloadPlaylist();
  }
}
