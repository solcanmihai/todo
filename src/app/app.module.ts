import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './todo-list/list/list.component';
import { ListItemComponent } from './todo-list/list/list-item/list-item.component';
import { ItemDetailsComponent } from './todo-list/item-details/item-details.component';
import { AddItemComponent } from './todo-list/add-item/add-item.component';
import { NotificationComponent } from './notification/notification.component';

import { TodoService } from './todo-list/todo.service';

@NgModule({
  declarations: [
      AppComponent,
      TodoListComponent,
      DashboardComponent,
      ListComponent,
      ListItemComponent,
      ItemDetailsComponent,
      AddItemComponent,
      NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'todo',
        component: TodoListComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
