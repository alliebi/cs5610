import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';


@Injectable()
export class PageService {

    pages: Page[] = [
        new Page('321', 'Post1', '123', 'Lorem3'),
        new Page('432', 'Post2', '234', 'Lorem4'),
        new Page('543', 'Post3', '345', 'Lorem5'),
        new Page('654', 'Post4', '456', 'Lorem6'),
        new Page('765', 'Post5', '567', 'Lorem7'),
        new Page('876', 'Post6', '678', 'Lorem8'),
        new Page('987', 'Post7', '789', 'Lorem9'),
    ];

    createPage(websiteId: string, page: Page) {

        const newPage = {
            _id: (new Date()).getTime() + '',
            name: page.name,
            wid: websiteId,
            title: page.title
        };

        this.pages.push(newPage);
    }

    findPageBywid(wid: string) {
        const resultSet = [];
        for (const i in this.pages) {
            if (this.pages[i].wid === wid) {
                resultSet.push(this.pages[i]);
            }
        }
        return resultSet;
    }

    findPageBywid2(wid: string) {
        return this.pages.filter(function (page) {
            return page.wid === wid;
        });
    }

    findPageById(pageId: string) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    }

    updatePage(pageId: string, page: Page) {
        for (const i in this.pages) {
            if (this.pages[i]._id === pageId) {
                this.pages[i].name = page.name;
                this.pages[i].title = page.title;
            }
        }
    }

    deleteWebsite(pageId: string) {
        for (const i in this.pages) {
            if (this.pages[i]._id === pageId) {
                const j = +i;
                this.pages.splice(j, 1);
            }
        }
    }
}
