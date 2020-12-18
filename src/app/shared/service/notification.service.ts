import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Notification, NotificationType, NotificationOption } from 'src/app/core/x-notification/x-notification';

@Injectable()
export class NotificationService {
    private _subject = new Subject<Notification>();
    private _idx = 0;
    private notificationOption: NotificationOption;

    constructor() {
        this.notificationOption = new NotificationOption();
    }

    getObservable(): Observable<Notification> {
        return this._subject.asObservable();
    }

    info(title: string, message: string, timeout = 3000) {
        this._subject.next(new Notification(this._idx++, NotificationType.info, title, message, timeout, this.notificationOption));
    }

    success(title: string, message: string, timeout = 3000) {
        this._subject.next(new Notification(this._idx++, NotificationType.success, title, message, timeout, this.notificationOption));
    }

    warning(title: string, message: string, timeout = 3000) {
        this._subject.next(new Notification(this._idx++, NotificationType.warning, title, message, timeout, this.notificationOption));
    }

    error(title: string, message: string, timeout = 3000) {
        this._subject.next(new Notification(this._idx++, NotificationType.error, title, message, timeout, this.notificationOption));
    }
}
