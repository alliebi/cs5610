import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
    selector: 'app-website-new',
    templateUrl: './website-new.component.html',
    styleUrls: ['./website-new.component.css', '../../../../css/style.css']
})
export class WebsiteNewComponent implements OnInit {
    userId: string;
    newWebsite: Website;
    newWebsiteName: string;
    newWebsiteDescription: string;
    websites: Website[];
    @ViewChild('f') websiteForm: NgForm;

    constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.userId = params['uid'];
                }
            );
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    }

    onSubmit() {
        this.newWebsite = {_id: '', name: this.newWebsiteName, developerId: this.userId, description: this.newWebsiteDescription};
        this.websiteService.createWebsite(this.userId, this.newWebsite);
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}


