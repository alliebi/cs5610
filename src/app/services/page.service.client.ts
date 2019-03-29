import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class PageService {
    constructor(private http: HttpClient) {
    }
    base_url = 'http://localhost:3200/';

    createPage(websiteId: string, page) {
        const url = this.base_url + 'api/website/' + websiteId + '/page';
        return this.http.post(url, page);
    }

    findPageBywid(websiteId: string) {
        const url = this.base_url + 'api/website/' + websiteId + '/page';
        return this.http.get(url);
    }

    // findPageBywid2(wid: string) {
    //     return this.pages.filter(function (page) {
    //         return page.wid === wid;
    //     });
    // }

    findPageById(pageId: string) {
        const url = this.base_url + 'api/page/' + pageId;
        return this.http.get(url);
    }

    updatePage(pageId: string, page: Page) {
        const url = this.base_url + 'api/page/' + pageId;
        return this.http.put(url, page);
    }

    deletePage(pageId: string) {
        const url = this.base_url + 'api/page/' + pageId;
        return this.http.delete(url);
    }
}
