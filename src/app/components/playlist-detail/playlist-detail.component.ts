import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PlaylistFacade } from '../../features/playlist/playlist.facade';
import { TrackFacade } from '../../features/track/track.facade';
import { TimePipe } from '../../pipes/TimePipe';
import { CollageComponent } from '../collage/collage.component';
import { Playlist } from '../../features/playlist/playlist.entity';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    TimePipe,
    CollageComponent,
    NgClass,
    MatProgressSpinnerModule,
  ],
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.scss',
})
export class PlaylistDetailComponent implements OnInit, OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);

  trackFacade: TrackFacade = inject(TrackFacade);
  playlistFacade: PlaylistFacade = inject(PlaylistFacade);

  playlistTracks$;
  playlistLengthMinutes$;
  playlistLengthSeconds$;

  displayedColumns = ['id', 'title', 'album', 'year', 'length', 'd'];

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

  removeFromPlaylist($event: Event, trackId: number) {
    $event.stopPropagation();
    this.playlistFacade.removeFromPlaylist(trackId);
  }

  editPlaylistDetails(playlist: Playlist) {
    this.playlistFacade.editPlaylistDetails(playlist);
  }
}
