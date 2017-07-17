import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  ngOnInit(){
    this.notifications = this.notificationService.retriveMessages();

    this.notificationService.newMessageAdded.subscribe(
      data => {
          console.log('event caught');
          this.notifications = this.notificationService.retriveMessages();
          console.log(this.notifications);
          // setTimeout(() => {
          //   //this.notifications = [];
          //   this.notifications.push('inca una');
          //   this.notifications = [];
          // }, 5000);
        
      }
    );

    this.notificationService.deleteMessage.subscribe(
      data => {
        this.notifications = this.notificationService.retriveMessages();
      }
    );
  }
}
