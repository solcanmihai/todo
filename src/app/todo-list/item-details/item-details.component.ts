import { Component, Input, OnInit } from '@angular/core';

import { TodoItem } from './../todo-item';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  selectedItem: TodoItem;

  constructor(private todoService: TodoService) {}

  updateItem(): void{
    this.selectedItem = this.todoService.getSelectedItem();
  }

  closeWindow(): void{
    this.selectedItem = null;
    this.todoService.setSelectedItem(null);
  }

  deleteItem(): void{
    this.todoService.setSelectedItem(null);
    this.todoService.eraseItem(this.selectedItem);
    this.selectedItem = null;
  }

  ngOnInit(){
    this.todoService.pushSelectedItemLocal.subscribe(
      data => {
        this.selectedItem = this.todoService.getSelectedItem();
      }
    );
  }
}
