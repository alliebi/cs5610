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
    uid: string;
    wid: string;

    constructor(private activateRoute: ActivatedRoute, private pageService: PageService) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = params['uid'];
                this.wid = params['wid'];
                console.log('page-list uid:');
                console.log(this.uid);
                console.log('page-list wid:');
                console.log(this.wid);
            });

        this.pageService.findPageBywid(this.wid).subscribe(
            (data: any) => {
                this.pages = data;
            }
        );
        console.log('page list:' );
        console.log(this.pages);
    }

}
