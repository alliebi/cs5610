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
    uid: string;
    errorFlag: boolean;
    errorMsg = 'Invalid username or password !';

    constructor(private router: Router, private userService: UserService) {
        this.errorFlag = false;
    }

    login() {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        const loginUser = this.userService.findUserByCredential(this.username, this.password);
        console.log(loginUser);
        if (loginUser === undefined || this.password !== loginUser.password) {
            this.errorFlag = false;
        } else {
            this.router.navigate(['/user', loginUser._id]);
        }
    }

    ngOnInit() {
    }
}
