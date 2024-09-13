import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PlaylistFacade } from '../../features/playlist/playlist.facade';
import { TrackFacade } from '../../features/track/track.facade';
import { OptionSelectComponent } from '../option-select/option-select.component';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    OptionSelectComponent,
    SideMenuItemComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  trackFacade: TrackFacade = inject(TrackFacade);
  playlistFacade: PlaylistFacade = inject(PlaylistFacade);
  router: Router = inject(Router);

  tracks$;
  playlists$;
  mode: string | undefined;

  modes: string[] = ['Playlists', 'Tracks'];

  constructor() {
    this.tracks$ = this.trackFacade.tracks$;
    this.playlists$ = this.playlistFacade.playlists$;
  }

  selectMode($event: string) {
    if (this.mode == $event) {
      this.mode = undefined;
    } else {
      this.mode = $event;
    }
    this.router.navigate(['dashboard', $event.toLowerCase()]);
  }
}
