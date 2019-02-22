import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css', '../../../../css/style.css']
})

export class ProfileComponent implements OnInit {
    @ViewChild('f') profileForm: NgForm;
    username: string; // see usage as two-way data binding
    user: User;
    uid: string; // see usage as two-way data binding
    errorFlag: boolean;
    errorMsg = 'Invalid username or password !';
    newUser: User;
    newUsername = '';
    newEmail = '';
    newFirstName = '';
    newLastName = '';

    constructor(private router: Router, private userService: UserService, private activateRoute: ActivatedRoute) {
        this.errorFlag = false;
    }

    profile() {


        this.router.navigate(['/user', this.uid, 'website']);

    }

    ngOnInit() {

        this.activateRoute.params.subscribe(
            (params: any) => {
                console.log('"params:" ');
                console.log(params);
                this.uid = params['uid'];
                console.log(this.uid);
            });
        this.user = this.userService.findUserById(this.uid);
        this.username = this.user['username'];

    }

    onUpdateUser() {
        if (this.newUsername === '') {
            this.newUsername = this.username;
        }
        if (this.newEmail === '') {
            // @ts-ignore
            this.newEmail = this.user.email;
        }
        if (this.newFirstName === '') {
            this.newFirstName = this.user.firstName;
        }
        if (this.newLastName === '') {
            this.newLastName = this.user.lastName;
        }
        this.newUser = new User(this.uid, this.newUsername, this.user.password, this.newFirstName, this.newLastName, this.newEmail);
        this.userService.updateUser(this.newUser);
        alert('successfully update your profile');
    }


}
