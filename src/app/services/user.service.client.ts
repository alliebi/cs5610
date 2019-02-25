import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

// injecting service into module
@Injectable()

export class UserService {

    // constructor(private userService: UserService) {
    // }
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
        user._id = String(Math.floor(Math.random() * 1000) + 1);
        this.users.push(user);
    }

    findUserByCredential(username: String, password: String) {
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    }

    findUserById(userId: String) {
        return this.users.find(function (user) {
            return user._id === userId;
        });
    }

    findUserByUsername(username: String) {
        return this.users.find(function (user) {
            return user.username === username;
        });
    }

    updateUser(userId: string, user: User) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
                this.users[i].firstName = user.firstName;
                this.users[i].lastName = user.lastName;
                return this.users[i];
            }
        }
    }

    deleteUserById(userId: String) {
        for (const i in this.users) {
            if (this.users[i]._id === userId) {
                const j = +i;
                this.users.splice(j, 1);
            }
        }
    }
}
