import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css', '../../../../css/style.css']
})
export class WebsiteListComponent implements OnInit {
  uid: string;
  websites: Website[] = [];
  websiteService: WebsiteService;
  wid: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          console.log('"params:" ');
          console.log(params);
          this.uid = params['uid'];
          console.log(this.uid);
        });
    this.websiteService = new WebsiteService();
    this.websites = this.websiteService.findWebsitesByUser(this.uid);
    console.log(this.websites);
  }
}
