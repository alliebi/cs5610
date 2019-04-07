import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

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
    user = {username: '', password: '', firstName: '', lastName: '', email: ''};

    errorFlag: boolean;
    errorMsg = 'Invalid username or password !';

    constructor(private router: Router, private userService: UserService) {
    }

    register() {
         if (this.ng_username !== this.ng_verify_password) {
            this.errorFlag = true;
            this.errorMsg = 'Password and verify password must match.';
        } else {
            this.user.username = this.ng_username;
            this.user.password = this.ng_password;
            this.userService.register(this.user.username, this.user.password)
                .subscribe(
                    (data: any) => {
                        if (data) {
                            this.router.navigate(['/profile']);
                        } else {
                            this.errorFlag = true;
                            console.log(this.errorMsg);
                        }
                    },
                    (error: any) => {
                        if (error) {
                            this.errorFlag = true;
                            this.errorMsg = error;
                            console.log(this.errorMsg);
                        }
                    }
                );
        }
    }

    ngOnInit() {
    }
}
