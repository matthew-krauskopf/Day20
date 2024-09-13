import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Playlist } from '../../features/playlist/playlist.entity';
import { Track } from '../../features/track/track.entity';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-side-menu-item',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './side-menu-item.component.html',
  styleUrl: './side-menu-item.component.scss',
})
export class SideMenuItemComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  @Input() item?: Track | Playlist;
  @Input() selectedItem?: Track | Playlist;
  @Output() emitter: EventEmitter<Track | Playlist> = new EventEmitter();

  selectItem(item: Track | Playlist) {
    this.emitter.emit(item);
  }
}
