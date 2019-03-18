import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    msg = '';

    constructor(private activateRoute: ActivatedRoute, private pageService: PageService, private router: Router) {
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
        console.log('page edit:');
        console.log(this.page);
    }

    onUpdate() {
        this.pageService.updatePage(this.pid, this.page).subscribe(
            (data: any) => {
                this.page = data;
                this.router.navigate(['/user', this.uid, 'website', this.wid, 'page']);

            }
        );

        console.log(this.page);
    }

    onDelete() {
        this.pageService.deletePage(this.pid).subscribe(
            (data: any) => {
                this.msg = data;
            }
        );
        this.router.navigate(['../'], {relativeTo: this.activateRoute});
    }
}
