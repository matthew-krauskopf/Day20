import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthFacade } from '../../features/auth/auth.facade';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authFacade: AuthFacade = inject(AuthFacade);

  pattern = '\\w{5,}';

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('mattyk17', [
      Validators.required,
      Validators.pattern(this.pattern),
    ]),
    password: new FormControl('pass123', [
      Validators.required,
      Validators.pattern(this.pattern),
    ]),
  });

  login() {
    this.authFacade.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }
}
