import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackFacade } from '../../features/track/track.facade';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopBarComponent, RouterOutlet, SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  tracksFacade: TrackFacade = inject(TrackFacade);

  ngOnInit(): void {
    this.tracksFacade.loadTracks();
  }
}
