import { RouterModule, Routes } from '@angular/router';

// Modules
import { AppComponent} from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './todo-list/list/list.component';
import { ListItemComponent } from './todo-list/list/list-item/list-item.component';
import { ItemDetailsComponent } from './todo-list/item-details/item-details.component';
import { AddItemComponent } from './todo-list/add-item/add-item.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SentimentAnalyserComponent } from './sentiment-analyser/sentiment-analyser.component';
import { JokesGeneratorComponent } from './jokes-generator/jokes-generator.component';

import { AuthGuard } from './auth.guard';


export const appRoutes: Routes = 
[
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/welcome'
    },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'todo',
                component: TodoListComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'sentiment-analyser',
                component: SentimentAnalyserComponent
            },
            {
                path: 'jokes-generator',
                component: JokesGeneratorComponent
            }
        ]

    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]