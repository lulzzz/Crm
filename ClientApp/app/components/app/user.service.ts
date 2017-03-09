﻿import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }

    addUser(id: number, name: string, phone: string, email: string, isActive: boolean, isAdmin: boolean, isTeacher: boolean): void {
        var user = new User();
        user.id = id;
        user.name = name;
        user.phone = phone;
        user.email = email;
        user.active = isActive;
        user.isAdmin = isAdmin;
        user.isTeacher = isTeacher;
        USERS.push(user);
    }

    deleteUser(user: User): void {
        USERS.splice(USERS.indexOf(user), 1);
    }
}