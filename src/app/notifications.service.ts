import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; 

@Injectable()
export class NotificationsService {
  private messages: string[];

  @Output() newMessageAdded = new EventEmitter();
  @Output() deleteMessage = new EventEmitter();

  constructor(private router: Router) {
    this.messages = [];  
  }

  addMessage(message: string): void{
    if(this.messages.length >= 1){
      return;
    }

    this.messages.push(message);
    this.newMessageAdded.emit();
    console.log('event emited');

    setTimeout(() => {
      this.deleteMessage.emit();
      this.messages.splice(this.messages.indexOf(message));
    }, 5000);

    this.router.navigateByUrl('/');
  }

  retriveMessages(): string[]{
    let toBeSent: string[] = this.messages;
    return toBeSent;
  }

}
