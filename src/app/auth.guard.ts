import { Injectable, EventEmitter, Output } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { NotificationsService } from './notifications.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private notificationsService: NotificationsService,
    private router: Router
  ) {}

  canActivate(){
    console.log('guard reached');

    let isAuthenticated = this.authService.isLoggedIn();

    if(isAuthenticated == false)
    {
      this.notificationsService.addMessage('You must be logged in to access that page');

      
      // not the best thing to do.. The only way I found to refresh dashboard
      // this.router.navigateByUrl('/login');
      // setTimeout(() => this.router.navigateByUrl('/dashboard'), 1);
    }

    return isAuthenticated;
  }
}
