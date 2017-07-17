import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { TodoService } from './todo-list/todo.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NotificationsService } from './notifications.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    TodoService, 
    AuthGuard,
    AuthService,
    NotificationsService
  ]
})
export class ServicesModule { }
