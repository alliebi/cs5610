import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css', '../../../../css/style.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  website: Website;
  newWebsite: Website;
  newWebsiteName = '';
  newWebsiteDescription = '';
  websites: Website[];
  websiteIdObs = new Subject<string>();
  @ViewChild('f') websiteForm: NgForm;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.userId = params['uid'];
              this.websiteId = params['wid'];
            }
        );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.websiteIdObs
        .subscribe(
            (websiteId: string) => {
              this.websiteId = websiteId;
              this.website = this.websiteService.findWebsiteById(this.websiteId);
            }
        );
  }

  onChangeWebsite(id) {
    this.websiteIdObs.next(id);
  }

  onEditWebsite() {
       if (this.newWebsiteName === '') {
      this.newWebsiteName = this.website.name;
    }
    if (this.newWebsiteDescription === '') {
      this.newWebsiteDescription = this.website.description;
    }
    this.newWebsite = {_id: this.websiteId, name: this.newWebsiteName, developerId: this.userId, description: this.newWebsiteDescription};
    this.websiteService.updateWebsite(this.websiteId, this.newWebsite);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}