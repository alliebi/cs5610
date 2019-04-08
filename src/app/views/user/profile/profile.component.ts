import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

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

    constructor(
        private router: Router,
        private userService: UserService,
        private activateRoute: ActivatedRoute,
        private sharedService: SharedService) {
    }

    ngOnInit() {
        this.user = this.sharedService.user;
        this.uid = this.sharedService.user._id;
        this.userService.findUserById(this.uid).subscribe(
            (data: any) => {
                // console.log(data);
                this.user = data;
            }
        );
    }

    onUpdateUser() {
        this.userService.updateUser(this.uid, this.user).subscribe(
            (user: any) => {
                this.user = user;
                // console.log('user.client');
                // console.log(this.user);
                this.router.navigate(['/user', user._id]);
            }
        );
    }

    logout() {
        this.userService.logout().subscribe((data: any) => {
            this.sharedService.user = null;
            console.log('logout');
        });
    }
}
