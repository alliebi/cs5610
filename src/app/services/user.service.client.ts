import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SharedService} from './shared.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

// injecting service into module
@Injectable()

export class UserService {

    baseUrl = environment.baseUrl;
    options = {withCredentials: false};

    constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {
    }

    createUser(user) {
        const url = this.baseUrl + 'api/user';
        return this.http.post(url, user);
    }

    findUserByCredentials(username, password) {
        const url = this.baseUrl + 'api/user?username=' + username + '&password=' + password;
        return this.http.get(url);
    }

    findUserById(userId) {
        const url = this.baseUrl + 'api/user/' + userId;
        return this.http.get(url);
    }

    findUserByUsername(username: String) {
        const url = this.baseUrl + 'api/user/' + username;
        return this.http.get(url);
    }

    updateUser(userId: String, user) {
        const url = this.baseUrl + 'api/user/' + userId;
        // console.log(url);
        return this.http.put(url, user);
    }

    deleteUserById(userId: String) {
        const url = this.baseUrl + 'api/user/' + userId;
        return this.http.delete(url);
    }

    login(username: String, password: String) {
        this.options.withCredentials = true; // jga

        const body = {
            username: username,
            password: password
        };

        return this.http.post(this.baseUrl + 'api/login', body, this.options);
    }

    logout() {
        this.options.withCredentials = true;
        return this.http
            .post(this.baseUrl + 'api/logout', '', this.options);
    }

    register(username: String, password: String) {
        this.options.withCredentials = true;
        const user = {username: username, password: password};
        return this.http
            .post(this.baseUrl + 'api/register', user, this.options);
    }

    loggedIn() {
        return this.http
            .post(this.baseUrl + 'api/loggedin', '', this.options)
            .pipe(
                map((user) => {
                        if (user !== 0) {
                            this.sharedService.user = user;
                            return true;
                        } else {
                            this.router.navigate(['/login']);
                            return false;
                        }
                    }
                ));
    }
}
