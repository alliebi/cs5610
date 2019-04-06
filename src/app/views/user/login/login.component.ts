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

        this.userService
            .login(this.username, this.password)
            .subscribe((data: any) => {
                this.sharedService.user = data;
                this.router.navigate(['/profile']);
            }, (error: any) => {
                console.log(error);
            });
    }

    ngOnInit() {
    }
}
