import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collage.component.html',
  styleUrl: './collage.component.scss',
})
export class CollageComponent {
  @Input()
  trackIds?: number[];
}
