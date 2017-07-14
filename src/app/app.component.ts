import { Component } from '@angular/core';

import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    if(localStorage.getItem('todo-items') == null){
      localStorage.setItem('todo-items', '[]');
    }
    if(localStorage.getItem('todo-id') == null){
      localStorage.setItem('todo-id', '1');
    }
  }
}
