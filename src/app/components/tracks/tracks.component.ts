import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TrackFacade } from '../../features/track/track.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss',
})
export class TracksComponent {
  trackFacade = inject(TrackFacade);
}
