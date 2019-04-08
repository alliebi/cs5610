import {Component, OnInit} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
    selector: 'app-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css', '../../../../css/style.css']
})

export class PageListComponent implements OnInit {
    pages: Page[] = [];
    uid: string;
    wid: string;

    constructor(private activateRoute: ActivatedRoute,
                private pageService: PageService,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = this.sharedService.user._id;
                this.wid = params['wid'];
                console.log('page-list uid: ' + this.uid + ' wid: ' + this.wid);
            });

        this.pageService.findPageBywid(this.wid).subscribe(
            (data: any) => {
                // console.log(data);
                this.pages = data.pages;
            }
        );
    }

}
