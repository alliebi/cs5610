import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @ViewChild('f') registerForm: NgForm;
    ng_username = '';
    ng_password = '';
    ng_verify_password = '';
    user = {username: '', password: '', firstName: '', lastName: '', email: 'sdsdfs'};


    constructor(private router: Router, private userService: UserService) {
    }

    register() {
        this.user.username = this.ng_username;
        console.log(this.ng_username);
        this.user.password = this.ng_password;
        this.userService.createUser(this.user).subscribe(
            (user: any) => {
                this.user = user;
                // this.router.navigate(['/user', user._id]);
            }
        );
        //
        // this.userService.findUserByCredentials(this.ng_username, this.ng_password).subscribe(
        //     (user: any) => {
        //         this.router.navigate(['/user', user._id]);
        //     }
        // );
        // this.userService.createUser(this.user);
        // const loginUser = this.userService.findUserByCredentials(this.ng_username, this.ng_password);
        // console.log(loginUser);
        // console.log(this.userService);
        // this.router.navigate(['/user', loginUser._id]);
    }

    ngOnInit() {
    }

}
