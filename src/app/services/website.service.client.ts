import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class WebsiteService {
    constructor(private http: HttpClient) {
    }

    base_url = 'http://localhost:3200/';

    createWebsite(userId: String, website) {
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
