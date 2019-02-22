import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-page-edit',
    templateUrl: './page-edit.component.html',
    styleUrls: ['./page-edit.component.css', '../../../../css/style.css'],
})
export class PageEditComponent implements OnInit {
    uid: string;
    wid: string;

    constructor(private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = params['uid'];
                this.wid = params['wid'];
            });
    }
}
