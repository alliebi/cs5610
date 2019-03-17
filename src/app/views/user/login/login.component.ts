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
    }

    login() {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('username:' + this.username);
        this.userService.findUserByCredentials(this.username, this.password).subscribe((user: any) => {
                if (user) {
                    console.log(user);
                    this.router.navigate(['/user', user._id]);
                } else {
                    this.errorFlag = true;
                }
            }
        );
    }

    ngOnInit() {
    }
}
