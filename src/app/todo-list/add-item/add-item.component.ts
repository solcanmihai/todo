import { Component } from '@angular/core';

import { TodoService } from '../todo.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  constructor(private todoService: TodoService) {}

  newItem: TodoItem = {id: 10, title: 'asta e unu nou, yussss <3', description: 'cel mai nou, cel mai nou!!!'};

  addNewItem(title: string, description: string): void{
    this.todoService.addItem(title, description);
  }
}
