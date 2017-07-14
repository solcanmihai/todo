import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
    @Input() delay: number;
    afisat = true;

    //Set display property to false
    eraseNotification(): void{
        this.afisat = false;
    }

    //La initializare, dupa timpul specificat, sterge componenta
    ngOnInit()
    {
        setTimeout(() => this.eraseNotification(), this.delay);
    }
}