import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { TrackDetailComponent } from './components/track-detail/track-detail.component';
import { TracksComponent } from './components/tracks/tracks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tracks',
      },
      {
        path: 'tracks',
        component: TracksComponent,
        children: [
          {
            path: ':id',
            component: TrackDetailComponent,
          },
        ],
      },
      {
        path: 'playlists',
        component: PlaylistsComponent,
        children: [
          {
            path: ':id',
            component: PlaylistDetailComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
