import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';


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

    constructor(private router: Router, private userService: UserService, private sharedService: SharedService) {
    }

    login() {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        if (this.username === null || this.password === null) {
            this.errorFlag = true;
            this.errorMsg = 'Username, password or verify password required.';
        } else {
            this.userService
                .login(this.username, this.password)
                .subscribe((data: any) => {
                    if (data) {
                        this.sharedService.user = data;
                        this.errorFlag = false;
                        this.router.navigate(['/profile']);
                    } else {
                        this.errorFlag = true;
                        console.log(this.errorMsg);
                    }
                }, (error: any) => {
                    if (error) {
                        this.errorFlag = true;
                        this.errorMsg = error;
                        console.log(this.errorMsg);

                    }
                });
        }
    }

    ngOnInit() {
    }
}
