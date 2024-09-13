import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPIService } from '../base-api.service';
import { Track } from './track.entity';

@Injectable({
  providedIn: 'root',
})
export class TrackService extends BaseAPIService {
  endpoint = '/tracks';

  getTracks(): Observable<Track[]> {
    return this.performGet(this.endpoint);
  }
}
