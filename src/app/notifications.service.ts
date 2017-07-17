import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; 

@Injectable()
export class NotificationsService {
  private messages: string[];
  private buffer: number;

  @Output() newMessageAdded = new EventEmitter();
  @Output() deleteMessage = new EventEmitter();

  constructor(private router: Router) {
    this.messages = [];  
    this.buffer = 0;
    console.log('!!!clear!!!');
  }

  clear(): void{
    this.messages = [];
    this.deleteMessage.emit();
    console.log('!!!clear!!!');
  }

  addMessage(message: string): void{
    this.buffer++;

    if(this.messages.length >= 1){
      this.messages = [];
    }

    this.messages.push(message);
    this.newMessageAdded.emit();

    console.log('a message has just been added, and the added event was emited');

    this.router.navigateByUrl('/');

    setTimeout(() => {
      // if(this.messages == []){
      //   console.log('!!!mesaje goale!!!');
      //   return;
      // }
      if(this.buffer == 1){
        this.deleteMessage.emit();
        console.log('delete message event emited');
        this.messages.splice(this.messages.indexOf(message));
      }
      this.buffer--;
      
    }, 5000);
  }

  retriveMessages(): string[]{
    return this.messages;
  }

}
