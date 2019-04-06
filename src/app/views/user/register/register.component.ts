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
    user = {username: '', password: '', firstName: '', lastName: '', email: ''};


    constructor(private router: Router, private userService: UserService) {
    }

    register() {
        this.user.username = this.ng_username;
        this.user.password = this.ng_password;

        this.userService.register(this.user.username, this.user.password)
            .subscribe(
                (data: any) => {
                    this.router.navigate(['/profile']);
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    ngOnInit() {
    }
}
