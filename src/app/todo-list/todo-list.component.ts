import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  showAddItem: boolean = false;

  toggleAddItem(): void{
    if(this.showAddItem == false){
      this.showAddItem = true;
    }
    else{
      this.showAddItem = false;
    }
  }
}
