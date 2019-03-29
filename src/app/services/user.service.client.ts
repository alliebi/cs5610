import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// injecting service into module
@Injectable()

export class UserService {
    constructor(private http: HttpClient) {
    }

    base_url = 'http://localhost:3200/';

    createUser(user) {
        const url = this.base_url + 'api/user';
        return this.http.post(url, user);
        // newUser._id =
    }

    findUserByCredentials(username, password) {
        const url = this.base_url + 'api/user?username=' + username + '&password=' + password;
        return this.http.get(url);
    }

    findUserById(userId) {
        const url = this.base_url + 'api/user/' + userId;
        return this.http.get(url);
    }

    findUserByUsername(username: String) {
        const url = this.base_url + 'api/user/' + username;
        return this.http.get(url);
    }

    updateUser(userId: String, user) {
        const url = this.base_url + 'api/user/' + userId;
        return this.http.put(url, user);
    }

    deleteUserById(userId: String) {
        const url = this.base_url + 'api/user/' + userId;
        return this.http.delete(url);
    }
}
