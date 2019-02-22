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
    ng_username: string;
    ng_password: string;
    ng_verify_password: string;
    errorFlag: boolean;
    user: User = {_id: '', username: '', password: '', firstName: '', lastName: '', email: ''};


    constructor(private router: Router, private userService: UserService) {
        this.errorFlag = false;
    }

    register() {
        this.user.username = this.ng_username;
        this.user.password = this.ng_password;
        this.userService.createUser(this.user);
        const loginUser = this.userService.findUserByCredential(this.ng_username, this.ng_password);
        console.log(loginUser);
        this.router.navigate(['/user', loginUser._id]);
    }

    ngOnInit() {
    }

}
