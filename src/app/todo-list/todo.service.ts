import { Injectable, OnInit, EventEmitter } from '@angular/core';

import { TodoItem } from './todo-item';

@Injectable()
export class TodoService{
  private items: TodoItem[];
  private selectedItem: TodoItem;
  private currentId: number;
  
  pushSelectedItemLocal = new EventEmitter<TodoItem>();

  updateStorage(): void{
    localStorage.setItem('todo-items', JSON.stringify(this.items));
    localStorage.setItem('todo-id', String(this.currentId));
  }

  constructor()
  {
    //this.items = ITEMS;
    this.items = JSON.parse(localStorage.getItem('todo-items'));
    this.currentId = JSON.parse(localStorage.getItem('todo-id'));
    //this.updateStorage();
  }

  eraseItem(x: TodoItem): void{
    let poz: number = this.items.indexOf(x);
    if(poz !== -1){
      this.items.splice(poz, 1);
    }
    this.updateStorage();
  }

  addItem(title: string, description: string): void{
    this.items.push(new TodoItem(this.currentId, title, description));
    this.currentId++;
    this.updateStorage();
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
