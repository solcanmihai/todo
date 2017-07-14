import { RouterModule, Routes } from '@angular/router';

import { AppComponent} from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './todo-list/list/list.component';
import { ListItemComponent } from './todo-list/list/list-item/list-item.component';
import { ItemDetailsComponent } from './todo-list/item-details/item-details.component';
import { AddItemComponent } from './todo-list/add-item/add-item.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = 
[
    
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'todo',
        component: TodoListComponent
        ,canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]