﻿import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})

export class UserDetailComponent implements OnInit{
    user: User;
    model: User;

    constructor(private router: ActivatedRoute,
                private service: UserService,
                private location: Location) { }

    delete() {
        this.service.deleteUser(this.user);
        this.goBack();
    }


    ngOnInit(): void {
        this.router.params
            .switchMap((params: Params) => this.service.getUser(+params['id']))
            .subscribe(user => this.model =  Object.assign({}, user));
    }

    onSubmit(): void {
        this.goBack();
    }

    goBack(): void {
         this.location.back();
    }
}