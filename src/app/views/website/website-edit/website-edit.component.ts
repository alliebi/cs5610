import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
    selector: 'app-website-edit',
    templateUrl: './website-edit.component.html',
    styleUrls: ['./website-edit.component.css', '../../../../css/style.css']
})
export class WebsiteEditComponent implements OnInit {
    uid: string;
    websiteId: string;
    website: Website;
    websites: Website[];
    msg: string;
    @ViewChild('f') websiteForm: NgForm;

    constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.uid = params['uid'];
                    this.websiteId = params['wid'];
                }
            );
        this.websiteService.findWebsitesByUser(this.uid).subscribe(
            (data: any) => {
                console.log(data);
                this.websites = data;
            }
        );
        this.websiteService.findWebsiteById(this.websiteId).subscribe(
            (data: any) => {
                this.website = data;
            }
        );
    }

    onEditWebsite(websiteId) {
        // const updated = this.websiteService.findWebsiteById(websiteId);
        // this.website = updated;

        this.websiteService.findWebsiteById(websiteId).subscribe(
            (data: any) => {
                this.website = data;
            }
        );

    }

    onUpdateWebsite() {
        this.websiteService.updateWebsite(this.websiteId, this.website).subscribe(
            (data: any) => {
                this.website = data;
            }
        );
    }

    onDelete() {
        this.websiteService.deleteWebsite(this.websiteId).subscribe(
            (data: any) => {
                this.msg = data;
            }
        );
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
