import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPIService } from '../base-api.service';
import { Playlist } from './entity';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService extends BaseAPIService {
  endpoint = '/playlists';

  getPlaylists(): Observable<Playlist[]> {
    return this.performGet(this.endpoint);
  }
}
