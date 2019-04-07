import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service';

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

    errorFlag: boolean;
    errorMsg = 'Page name required!';

    constructor(private activateRoute: ActivatedRoute,
                private pageService: PageService,
                private router: Router,
                private sharedService: SharedService) {}

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = this.sharedService.user._id;
                this.wid = params['wid'];
                this.pid = params['pid'];

                this.pageService.findPageById(this.pid).subscribe(
                    (data: any) => {
                        this.page = data;
                    }
                );
            });
    }

    onUpdate() {
        if (!this.page.name) {
            this.errorFlag = true;
            return;
        }
        this.pageService.updatePage(this.pid, this.page).subscribe(
            (data: any) => {
                this.errorFlag = false;
                this.page = data;
                this.router.navigate(['/user', this.uid, 'website', this.wid, 'page']);

            }
        );
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
