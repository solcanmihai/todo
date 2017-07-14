import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isLoggedInProperty: boolean;

  constructor() { 
    this.isLoggedInProperty = false;
  }

  isLoggedIn(): boolean{
    return this.isLoggedInProperty;
  }

  login(user: string, passwordHash: string): void{
    this.isLoggedInProperty = true;
  }

  logout(): void{
    this.isLoggedInProperty = false;
  }

}
