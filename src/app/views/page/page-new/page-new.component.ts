import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-page-new',
    templateUrl: './page-new.component.html',
    styleUrls: ['./page-new.component.css', '../../../../css/style.css']
})
export class PageNewComponent implements OnInit {
    uid: string;
    wid: string;
    newPage = {name: '', wid: '', title: ''};
    newPageName: string;
    newTitle: string;
    @ViewChild('f') pageForm: NgForm;

    constructor(private activateRoute: ActivatedRoute, private pageService: PageService, private router: Router) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = params['uid'];
                this.wid = params['wid'];
            });
    }

    onSubmit() {
        this.newPage = {name: this.newPageName, wid: this.wid, title: this.newTitle};
        this.pageService.createPage(this.wid, this.newPage).subscribe(
            (data: any) => {
                this.newPage = data;
                console.log(data);
                this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
            }
        );
    }

}
