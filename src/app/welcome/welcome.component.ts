import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  customDelayTime: number = 5000;
  notifications: string[];

  constructor(
    protected authService: AuthService,
    private router: Router,
    private notificationService: NotificationsService
  ) { }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
  }

  ngOnDestroy(){
    this.notificationService.clear();
    console.log('notifications cleared in welcome component');
  }

  ngOnInit(){
    this.notifications = this.notificationService.retriveMessages();          

    this.notificationService.newMessageAdded.subscribe(
      data => {
          console.log('event caught');
          this.notifications = this.notificationService.retriveMessages();          
          // setTimeout(() => {
          //   //this.notifications = [];
          //   this.notifications.push('inca una');
          //   this.notifications = [];
          // }, 5000);
      }
    );

    this.notificationService.deleteMessage.subscribe(
      data => {
        //this.notifications = this.notificationService.retriveMessages();
        this.notifications = this.notificationService.retriveMessages();          
        console.log('delete event!!!! <----------');
      }
    );
  }
}
