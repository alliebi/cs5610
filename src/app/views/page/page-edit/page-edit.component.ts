import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
    selector: 'app-page-edit',
    templateUrl: './page-edit.component.html',
    styleUrls: ['./page-edit.component.css', '../../../../css/style.css'],
})
export class PageEditComponent implements OnInit {
    uid: string;
    wid: string;
    pid: string;
    page: Page;

    constructor(private activateRoute: ActivatedRoute, private pageService: PageService) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = params['uid'];
                this.wid = params['wid'];
                this.pid = params['pid'];
            });
        this.pageService.findPageById(this.pid).subscribe(
            (data: any) => {
                this.page = data;
            }
        );
        console.log(this.uid);
        console.log(this.pid);
        console.log(this.page.name);
    }

    onUpdate() {
        this.pageService.updatePage(this.pid, this.page).subscribe(
            (data: any) => {
                this.page = data;
            }
        );
        console.log(this.page);
    }
}
