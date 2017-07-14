import { Component } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  hashedStr: string;

  handleLogin(username: string, password: string): void{
    this.authService.login(username, password);
    this.router.navigateByUrl('/');
  }
}
