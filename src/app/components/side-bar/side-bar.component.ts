import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { AuthFacade } from '../../features/auth/auth.facade';
import { Playlist } from '../../features/playlist/playlist.entity';
import { PlaylistFacade } from '../../features/playlist/playlist.facade';
import { Track } from '../../features/track/track.entity';
import { TrackFacade } from '../../features/track/track.facade';
import { OptionSelectComponent } from '../option-select/option-select.component';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    OptionSelectComponent,
    SideMenuItemComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  authFacade: AuthFacade = inject(AuthFacade);
  trackFacade: TrackFacade = inject(TrackFacade);
  playlistFacade: PlaylistFacade = inject(PlaylistFacade);
  router: Router = inject(Router);

  tracks$;
  playlists$;
  combinedList$;
  filteredList$;
  mode$;
  selectedItem$;

  item?: string;
  modes: string[] = ['Playlists', 'Tracks'];

  constructor() {
    this.tracks$ = this.trackFacade.tracks$;
    this.playlists$ = this.playlistFacade.playlists$;
    this.mode$ = this.authFacade.mode$;
    this.selectedItem$ = this.authFacade.selectedItem$;

    this.combinedList$ = combineLatest([this.tracks$, this.playlists$]).pipe(
      map(([tracks, playlists]) => {
        let combinedList: (Track | Playlist)[] = [];
        playlists.forEach((p) => combinedList.push(p));
        tracks.forEach((t) => combinedList.push(t));
        return combinedList;
      })
    );

    this.filteredList$ = combineLatest(this.combinedList$, this.mode$).pipe(
      map(([list, mode]) =>
        list.filter(
          (item) =>
            mode == '' ||
            mode.toLowerCase().slice(0, mode.length - 1) == item.type
        )
      )
    );
  }

  selectMode($event: string) {
    this.authFacade.changeMode($event);
  }

  selectItem($event: Track | Playlist) {
    if ($event.type == 'track') {
      this.trackFacade.loadTrack($event.id);
    } else if ($event.type == 'playlist') {
      this.playlistFacade.loadPlaylist($event.id);
    }
  }
}
