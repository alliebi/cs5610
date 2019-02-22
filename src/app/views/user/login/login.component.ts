import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('f') loginForm: NgForm;

    username: string; // see usage as two-way data binding
    password: string; // see usage as two-way data binding
    userService: UserService;
    user: User;
    uid: string;

    errorFlag: boolean;
    errorMsg = 'Invalid username or password !';

    constructor(private router: Router) {
        this.errorFlag = false;
        this.userService = new UserService();
    }

    login() {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.user = this.userService.findUserByCredential(this.username, this.password);
        this.uid = this.user._id;
        console.log(this.username);
        console.log(this.uid);

        if (this.password !== 'alice') {
            this.errorFlag = true;
        } else {
            this.router.navigate(['/user', this.uid]);
        }
    }

    ngOnInit() {

    }

}
