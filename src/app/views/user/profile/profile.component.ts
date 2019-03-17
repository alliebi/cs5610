import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css', '../../../../css/style.css']
})

export class ProfileComponent implements OnInit {
    @ViewChild('f') profileForm: NgForm;
    username: string;
    user = {username: null, firstName: null, lastName: null, email: null};
    uid: string;
    errorFlag: boolean;
    errorMsg = 'Invalid username or password !';

    constructor(private router: Router, private userService: UserService, private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            params => {
                this.uid = params['uid'];
            });
        this.userService.findUserById(this.uid).subscribe(
            (data: any) => {
                this.user = data;
                console.log(data);
            }
        );
    }

    profile() {
        // this.userService.findUserById(this.uid).subscribe(
        //     (user: any) => {
        //         if (user) {
        //             this.user = user;
        //             console.log(this.user);
        //         } else {
        //             this.errorFlag = true;
        //         }
        //
        //     }
        // );
    }

    onUpdateUser() {
        console.log(this.user);
        this.userService.updateUser(this.uid, this.user).subscribe(
            (user: any) => {
                this.user = user;
                console.log('user.client');
                console.log(this.user);
                this.router.navigate(['/user', user._id]);
            }
        );
    }

    onUpdateUserOnly() {
        this.userService.updateUser(this.uid, this.user).subscribe(
            (user: any) => {
                this.user = user;
            }
        );
    }
}
