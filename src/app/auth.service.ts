import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private isLoggedInProperty: boolean;

  constructor(
    private router: Router
  ) 
  { 
    if(sessionStorage.getItem('isLoggedIn') == null){
      sessionStorage.setItem('isLoggedIn', 'false');
    }
    else{
      if(sessionStorage.getItem('isLoggedIn') == 'true'){
        this.isLoggedInProperty = true;
      }
      else if(sessionStorage.getItem('isLoggedIn') == 'false'){
        this.isLoggedInProperty = false;
      }
    }

    //this.isLoggedInProperty = false;
  }

  isLoggedIn(): boolean{
    return this.isLoggedInProperty;
  }

  login(user: string, passwordHash: string): void{
    sessionStorage.setItem('isLoggedIn', 'true');
    this.isLoggedInProperty = true;
    this.router.navigateByUrl('/todo');
  }

  logout(): void{
    sessionStorage.setItem('isLoggedIn', 'false');
    this.isLoggedInProperty = false;
    this.router.navigateByUrl('/');
  }

}
