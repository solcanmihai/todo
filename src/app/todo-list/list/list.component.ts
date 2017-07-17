import { Component, OnInit } from '@angular/core';

import {TodoItem} from './../todo-item';

import {TodoService} from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  todoThings: TodoItem[];
  selectedItem: TodoItem;
  
  constructor(private todoService: TodoService) {}

  ngOnInit()
  {
    this.todoThings = this.todoService.getItems();
  }
}
