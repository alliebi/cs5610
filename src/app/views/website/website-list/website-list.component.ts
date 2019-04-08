import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
    selector: 'app-website-list',
    templateUrl: './website-list.component.html',
    styleUrls: ['./website-list.component.css', '../../../../css/style.css']
})
export class WebsiteListComponent implements OnInit {
    uid: string;
    websites: Website[] = [];

    constructor(private websiteService: WebsiteService,
                private activatedRoute: ActivatedRoute,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.uid = this.sharedService.user._id;
            });

        this.websiteService.findWebsitesByUser(this.uid).subscribe(
            (data: any) => {
                this.websites = data;
            }
        );
    }
}
