import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  errorMessage: string = '';
  usernameError: boolean = false;
  passwordError: boolean = false;


  constructor(private router: Router) {}

  login() {

    this.usernameError = false;
    this.passwordError = false;
    this.errorMessage = '';

    if (this.username.trim() !== 'admin') {
      this.usernameError = true;
    }

    if (this.password.trim() !== '1234') {
      this.passwordError = true;
    }

    if (!this.usernameError && !this.passwordError) {
      this.router.navigate(['/home']);
    }
    else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  }


