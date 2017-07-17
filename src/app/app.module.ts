import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent} from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './todo-list/list/list.component';
import { ListItemComponent } from './todo-list/list/list-item/list-item.component';
import { ItemDetailsComponent } from './todo-list/item-details/item-details.component';
import { AddItemComponent } from './todo-list/add-item/add-item.component';

import { appRoutes } from './app.routes';

import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DashboardModule } from './dashboard/dashboard.module'
import { ServicesModule } from './services.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DashboardModule,
    ServicesModule
  ],
  declarations: [
      AppComponent,
      TodoListComponent,
      ListComponent,
      ListItemComponent,
      ItemDetailsComponent,
      AddItemComponent,
      LoginFormComponent,
      PageNotFoundComponent,
      NavbarComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
