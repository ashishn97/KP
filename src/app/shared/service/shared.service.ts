import { Injectable, ViewChild } from '@angular/core';
import { BroadcastService } from './MessageService';

@Injectable()
export class SharedService {
    isScreenToggled = false;
    showSideBar = true;
    dropdownSettings = {
        singleSelection: false,
        idField: 'd',
        textField: 'name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true,
    };
    loggedInUser = {};

    constructor(private broadcastService: BroadcastService) {}

    showLoader() {
        this.broadcastService.broadcast('SHOW_LOADER', null);
    }

    getLoggerInUser() {
        const userPrincipal: any = JSON.parse(localStorage.getItem('userPrincipal'));
        this.loggedInUser = userPrincipal != null ? userPrincipal : { id: null, user: null };
        return this.loggedInUser;
    }

    hideLoader() {
        setTimeout(() => {
            this.broadcastService.broadcast('HIDE_LOADER', null);
        }, 500);
    }
}
