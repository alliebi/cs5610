import {Component, OnInit} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
    selector: 'app-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css', '../../../../css/style.css']
})

export class PageListComponent implements OnInit {
    pages: Page[] = [];
    pageService: PageService;
    wid: string;
    uid: string;

    constructor(private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                console.log('page list params:" ');
                console.log(params);
                console.log(params['wid']);
                console.log(params['uid']);
                this.uid = params.uid;
                this.wid = params.wid;
            });

        this.pageService = new PageService();
        this.pages = this.pageService.findPageBywid(this.wid);
        console.log('page list:');
        console.log(this.uid);
    }

}
