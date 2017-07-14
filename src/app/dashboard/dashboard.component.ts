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
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(){
    this.notifications = this.notificationService.retriveMessages();
    setTimeout(()=>{
      this.notifications = [];
    }, 5000);

    this.notificationService.newMessageAdded.subscribe(
      data => {
        if(this.router.url == '/dashboard'){
          this.notifications = this.notificationService.retriveMessages();
          // setTimeout(() => {
          //   //this.notifications = [];
          //   this.notifications.push('inca una');
          //   this.notifications = [];
          // }, 5000);
        }
      }
    );
  }

  logoutDashboard(): void{
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
}
