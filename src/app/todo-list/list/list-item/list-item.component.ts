import { Component, Input, Output, EventEmitter} from '@angular/core';

import { TodoItem } from '../../../todo-item';

import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent  {
  @Input() currentItem: TodoItem;

  constructor(private todoService: TodoService) {}

  userSelected(): void{
    this.todoService.setSelectedItem(this.currentItem);
    this.todoService.pushSelectedItem(this.currentItem);
  }
}
