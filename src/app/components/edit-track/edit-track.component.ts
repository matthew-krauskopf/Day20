import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CollageComponent } from '../collage/collage.component';

@Component({
  selector: 'app-edit-track',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    NgIf,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    CollageComponent,
    MatIconModule,
  ],
  templateUrl: './edit-track.component.html',
  styleUrl: './edit-track.component.scss',
})
export class EditTrackComponent {
  form = new FormGroup({
    title: new FormControl(this.dialogData.track.title, [Validators.required]),
    artist: new FormControl(this.dialogData.track.artist, [
      Validators.required,
    ]),
    album: new FormControl(this.dialogData.track.album),
    lengthMinutes: new FormControl(
      Math.floor(this.dialogData.track.length / 60),
      [Validators.required, Validators.min(0)]
    ),
    lengthSeconds: new FormControl(this.dialogData.track.length % 60, [
      Validators.required,
      Validators.min(0),
      Validators.max(59),
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<EditTrackComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
