import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Playlist } from '../../features/playlist/playlist.entity';
import { Track } from '../../features/track/track.entity';

@Component({
  selector: 'app-side-menu-item',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './side-menu-item.component.html',
  styleUrl: './side-menu-item.component.scss',
})
export class SideMenuItemComponent {
  @Input() item?: Track | Playlist;
  @Input() type?: string;
}
