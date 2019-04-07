import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service';

@Component({
    selector: 'app-widget-html',
    templateUrl: './widget-html.component.html',
    styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

    widgetNew = {name: '', text: ''};
    error: string;
    alert: string;
    flag = false;
    widget = {};
    userId: string;
    websiteId: string;
    pageId: string;
    widgetId: string;

    constructor(private activatedRoute: ActivatedRoute,
                private widgetService: WidgetService,
                private router: Router,
                private sharedService: SharedService) {
    }

    ngOnInit() {

        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';

        // fetch ids from current url
        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                    this.userId = this.sharedService.user._id;
                    this.widgetId = params['wgid'];
                    this.pageId = params['pid'];
                    this.websiteId = params['wid'];
                }
            );


        // fetching current widget based on widgetId
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(
                (data: any) => {
                    this.widget = data;
                    this.widget = {...this.widgetNew, ...this.widget};
                    console.log(this.widget);
                },
                (error: any) => console.log(error)
            );
    }

    onUpdate() {
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === '') {
            this.flag = true;
        } else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(
                    (data: any) => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
                    (error: any) => console.log(error)
                );
        }
    }

    onDelete() {
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                (data: any) => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
                (error: any) => console.log(error)
            );

    }

}
