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
    uid: '';
    newWebsite: {name: '', developerId: '', description: ''};
    newWebsiteName: '';
    newWebsiteDescription: '';
    websites: Website[];
    @ViewChild('f') websiteForm: NgForm;

    constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.uid = params['uid'];
                }
            );
        this.websiteService.findWebsitesByUser(this.uid).subscribe(
            (data: any) => {
                console.log('website-new on init');
                console.log(data);
                this.websites = data;
            }
        );
    }

    onSubmit() {
        this.newWebsite = {name: this.newWebsiteName, developerId: this.uid, description: this.newWebsiteDescription};
        console.log('newWebsite');
        console.log(this.newWebsite);
        this.websiteService.createWebsite(this.uid, this.newWebsite).subscribe(
            (data: any) => {
                console.log('response web');
                console.log(data);
                this.newWebsite = data;
                this.router.navigate(['user', this.uid, 'website']);
            }
        );
    }
}
