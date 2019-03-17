import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';



@Injectable()
export class PageService {
    constructor(private http: HttpClient) {
    }
    base_url = 'http://localhost:3200/';
    // pages: Page[] = [
    //     new Page('321', 'Post1', '123', 'Lorem3'),
    //     new Page('432', 'Post2', '234', 'Lorem4'),
    //     new Page('543', 'Post3', '345', 'Lorem5'),
    //     new Page('654', 'Post4', '456', 'Lorem6'),
    //     new Page('765', 'Post5', '567', 'Lorem7'),
    //     new Page('876', 'Post6', '678', 'Lorem8'),
    //     new Page('987', 'Post7', '789', 'Lorem9'),
    // ];

    createPage(websiteId: string, page: Page) {
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
