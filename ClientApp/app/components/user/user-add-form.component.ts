﻿import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'user-add-form',
    templateUrl: './user-form.component.html'
})
export class UserAddFormComponent {
    model = new User();
    newUser: boolean = true;
    @Output() userSave = new EventEmitter<User>()
    @Output() userCancel = new EventEmitter()

    onUserSubmit() { this.userSave.emit(this.model); }
    onUserCancel() { this.userCancel.emit(); }
    isActiveClicked(value: boolean) {
        if (!value) {
            this.model.isActive = false;
            this.model.isAdmin = false;
            this.model.isTeacher = false;
        } else {
            this.model.isActive = true;
        }
    }
}