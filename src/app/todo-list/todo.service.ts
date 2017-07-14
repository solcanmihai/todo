import { Injectable, OnInit, EventEmitter } from '@angular/core';

import { TodoItem } from '../todo-item';

const ITEMS: TodoItem[] = [
  {id: 1, title: 'Spala vasele', description: 'Nu ai auzit?'},
  {id: 2, title: 'Spala vasele acum', description: 'Nu ai auzit? Chiar trebuie sa ma repet?'},
  {id: 3, title: 'Spala vasele a', description: 'Nu ai auzit?'},
  {id: 4, title: 'Spala vasele 2', description: 'Nu ai auzit?'},
  {id: 5, title: 'Spala vasele fdsjfkds', description: 'Nu ai auzit?'},
  {id: 6, title: 'Spala vaselefdf', description: 'Nu ai auzit?'},
  {id: 7, title: 'Spala vasele more lorem ipsum', description: 'Nu ai auzit?'}
];

@Injectable()
export class TodoService{
  private items: TodoItem[];
  private selectedItem: TodoItem;
  private currentId: number;
  
  pushSelectedItemLocal = new EventEmitter<TodoItem>();

  constructor()
  {
    this.items = ITEMS;
    this.currentId = this.items.length + 1;
  }

  eraseItem(x: TodoItem): void{
    let poz: number = this.items.indexOf(x);
    if(poz !== -1){
      this.items.splice(poz, 1);
    }
  }

  addItem(title: string, description: string): void{
    this.items.push(new TodoItem(this.currentId, title, description));
    this.currentId++;
  }

  getItems(): TodoItem[]{
      return this.items;
  }

  getSelectedItem(): TodoItem{
    return this.selectedItem;
  }

  setSelectedItem(itemInput: TodoItem): void{
    this.selectedItem = itemInput;
  }

  pushSelectedItem(value: TodoItem){
    this.pushSelectedItemLocal.emit(value);
  }
}
