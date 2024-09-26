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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CollageComponent } from '../collage/collage.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-playlist',
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
  templateUrl: './edit-playlist.component.html',
  styleUrl: './edit-playlist.component.scss',
})
export class EditPlaylistComponent {
  form = new FormGroup({
    title: new FormControl(this.dialogData.playlist.title, [
      Validators.required,
    ]),
    description: new FormControl(this.dialogData.playlist.description),
  });

  constructor(
    public dialogRef: MatDialogRef<EditPlaylistComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
