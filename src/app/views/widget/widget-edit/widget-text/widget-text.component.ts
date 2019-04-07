import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';

@Component({
    selector: 'app-widget-text',
    templateUrl: './widget-text.component.html',
    styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

    flag = false; // setting error flag as false by default
    error: string;
    alert: string;
    userId: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    widget = {placeholder: '', name: '', rows: '', text: '', formatted: false};

    errorFlag: boolean;
    errorMsg = 'Widget name required!';

    constructor(private widgetService: WidgetService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private sharedService: SharedService) {
    }

    ngOnInit() {
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

        // fetch widget values as created on widget-new component
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(
                (data: any) => this.widget = data,
                (error: any) => console.log(error)
            );
    }

    onUpdateWidget() {
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.errorFlag = true;
        } else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(
                    (data: any) => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
                    (error: any) => console.log(error)
                );
        }
    }

    deleteWidget() {
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                (data: any) => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
                (error: any) => console.log(error)
            );

    }

}
