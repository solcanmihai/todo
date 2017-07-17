import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// components
import { WelcomeComponent } from './welcome.component';

import { NotificationModule } from '../notification/notification.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationModule,
    RouterModule
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
