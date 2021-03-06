﻿import { Component } from '@angular/core';

import { User } from '../../models/user';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';;
import { AppState } from '../../reducers';
import { UserActions } from '../../actions/user.actions';

@Component({
    selector: 'add-user',
    template: `
<user-add-form 
        (userSave)="onUserSubmit($event)" 
        (userCancel)="onUserCancel()">
</user-add-form>`
})
export class UserAddComponent {
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private userActions: UserActions) { }

    onUserSubmit(user: User): void {
        this.store.dispatch(this.userActions.addUser(user));
    }

    onUserCancel(): void {
        this.router.navigate(['/users']);
    }
}