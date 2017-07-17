import { Component, OnInit, Input } from '@angular/core';

import { NotificationsService } from '../notifications.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
    afisat = true;

    constructor(private notificationService: NotificationsService) {}

    //La initializare, dupa timpul specificat, sterge componenta
    ngOnInit()
    {
    }
}