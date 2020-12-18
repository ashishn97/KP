export class NotificationOption {
    align: String = 'center';
    position: String = 'top';
}

export class Notification {
    constructor(
        public id: number,
        public type: NotificationType,
        public title: string,
        public message: string,
        public timeout: number,
        public options: NotificationOption
    ) {}
}

export enum NotificationType {
    success = 'success',
    warning = 'warning',
    error = 'error',
    info = 'info',
}
