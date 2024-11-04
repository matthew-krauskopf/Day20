import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlaylistFacade } from '../../features/playlist/playlist.facade';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
})
export class PlaylistsComponent {
  playlistFacade = inject(PlaylistFacade);
}
