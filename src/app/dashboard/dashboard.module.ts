import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// components
import { DashboardComponent } from './dashboard.component';

import { NotificationModule } from '../notification/notification.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
