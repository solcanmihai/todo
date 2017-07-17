import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private isLoggedInProperty: boolean;

  constructor(
    private router: Router
  ) { 
    this.isLoggedInProperty = false;
  }

  isLoggedIn(): boolean{
    return this.isLoggedInProperty;
  }

  login(user: string, passwordHash: string): void{
    this.isLoggedInProperty = true;
    this.router.navigateByUrl('/todo');
  }

  logout(): void{
    this.isLoggedInProperty = false;
    this.router.navigateByUrl('/');
  }

}
