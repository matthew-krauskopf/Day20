import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackFacade } from '../../features/track/track.facade';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-track-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './track-detail.component.html',
  styleUrl: './track-detail.component.scss',
})
export class TrackDetailComponent implements OnInit, OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);
  trackFacade: TrackFacade = inject(TrackFacade);

  ngOnInit() {
    this.trackFacade.loadTrack(Number(this.route.snapshot.params['id']));
  }

  ngOnDestroy() {
    this.trackFacade.unloadTrack();
  }
}
