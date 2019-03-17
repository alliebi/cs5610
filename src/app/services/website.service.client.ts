import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class WebsiteService {
    constructor(private http: HttpClient) {
    }

    base_url = 'http://localhost:3200/';
    websites = [
        new Website('123', 'faebook', '456', 'Lorem'),
        new Website('234', 'Tweeter', '456', 'Lorem'),
        new Website('345', 'Gizmodo', '456', 'Lorem'),
        new Website('456', 'Go', '123', 'Lorem'),
        new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
        new Website('678', 'Checkers', '123', 'Lorem'),
        new Website('789', 'Chess', '234', 'Lorem')
    ];

    createWebsite(userId: string, website: Website) {
        const url = this.base_url + 'api/user/' + userId + '/website';
        return this.http.post(url, website);
    }

    findWebsitesByUser(userId: String) {
        const url = this.base_url + 'api/user/' + userId + '/website';
        return this.http.get(url);
    }

    // findWebsitesByUser2(userId: String) {
    //     return this.websites.filter(function (website) {
    //         return website.developerId === userId;
    //     });
    // }

    findWebsiteById(websiteId: String) {
        const url = this.base_url + 'api/website/' + websiteId;
        return this.http.get(url);
    }

    updateWebsite(websiteId: String, website: Website) {
        const url = this.base_url + 'api/website/' + websiteId;
        return this.http.put(url, website);
    }

    deleteWebsite(websiteId: String) {
        const url = this.base_url + 'api/website/' + websiteId;
        return this.http.delete(url);
    }
}
