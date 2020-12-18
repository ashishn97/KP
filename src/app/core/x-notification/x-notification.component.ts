import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notification, NotificationOption } from './x-notification';
import { NotificationService } from 'src/app/shared/service/notification.service';
declare var $: any;

@Component({
    selector: 'app-x-notification',
    templateUrl: './x-notification.component.html',
    styleUrls: ['./x-notification.component.scss'],
})
export class XNotificationComponent implements OnInit {
    notifications: Notification[] = [];
    private defaultNotificationOption: NotificationOption;
    private _subscription: Subscription;

    constructor(private _notificationSvc: NotificationService) {}

    private _addNotification(notification: Notification) {
        this.notifications.push(notification);
        this.showNotification(notification);
        if (notification.timeout !== 0) {
            setTimeout(() => this.close(notification), notification.timeout);
        }
    }

    close(notification: Notification) {
        this.notifications = this.notifications.filter((notif) => notif.id !== notification.id);
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    ngOnInit() {
        this._subscription = this._notificationSvc.getObservable().subscribe((notification) => {
            this._addNotification(notification);
        });
    }

    showNotification(notification: Notification) {
        const type = notification.type;
        const options = notification.options == null ? this.defaultNotificationOption : notification.options;
        $.notify(
            {
                id: 'knfkfn',
                icon: 'fa fa-info-circle',
                message: notification.message,
            },
            {
                type: type,
                timer: notification.timeout != null ? notification.timeout : 2000,
                placement: {
                    from: options.position,
                    align: options.align,
                },
            }
        );
    }
}
