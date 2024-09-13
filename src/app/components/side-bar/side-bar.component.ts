import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TrackFacade } from '../../features/track/track.facade';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  trackFacade: TrackFacade = inject(TrackFacade);

  tracks$;

  constructor() {
    this.tracks$ = this.trackFacade.tracks$;
  }
}
