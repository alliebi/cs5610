import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

// injecting service into module
@Injectable()

export class UserService {
    constructor(private http: HttpClient) {
    }

    base_url = 'http://localhost:3200/';
    users = [
        new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gamil.com'),
        new User('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gamil.com'),
        new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gamil.com'),
        new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jannunzi@gamil.com')
    ];

    // api = {
    //     'createUser': this.createUser,
    //     'findUserById': this.findUserById
    // };

    createUser(user: User) {
        const url = this.base_url + 'api/user/' + user._id;
        return this.http.post(url, user);
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
