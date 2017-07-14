import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; 

@Injectable()
export class NotificationsService {
  private messages: string[];

  @Output() newMessageAdded = new EventEmitter();

  constructor(private router: Router) {
    this.messages = [];  
  }

  addMessage(message: string): void{
    this.messages.push(message);
    this.newMessageAdded.emit();
    this.router.navigateByUrl('/');
  }

  retriveMessages(): string[]{
    let toBeSent: string[] = this.messages;
    this.messages = [];
    return toBeSent;
  }

}
