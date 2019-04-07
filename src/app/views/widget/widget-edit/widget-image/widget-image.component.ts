import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {WidgetImage} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';
import {SharedService} from '../../../../services/shared.service';

@Component({
    selector: 'app-widget-image',
    templateUrl: './widget-image.component.html',
    styleUrls: ['./widget-image.component.css', '../../../../../css/style.css']
})
export class WidgetImageComponent implements OnInit {
    userId: string;
    websiteId: string;
    widgetId: string;
    pageId: string;
    newWidget: WidgetImage;
    // widget: Widget;
    localPath: string;
    URL: string;
    baseUrl: string;
    msg = '';

    errorFlag: boolean;
    errorMsg = 'Widget name required!';

    constructor(private route: ActivatedRoute,
                private widgetService: WidgetService,
                private router: Router,
                private sharedService: SharedService) {
        this.newWidget = new WidgetImage('', 'IMAGE', '', '', '', '');
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.userId = this.sharedService.user._id;
                    this.widgetId = params['wgid'];
                    this.pageId = params['pid'];
                    this.websiteId = params['wid'];
                }
            );
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId).subscribe(
                (data: any) => {
                    this.newWidget = data;
                }
            );
        }
        this.baseUrl = environment.baseUrl;
    }

    onUpdateWidget() {
        if (!this.newWidget.name) {
            this.errorFlag = true;
            return;
        }
        this.URL = ((this.newWidget.url === 'undefined') ? this.localPath : this.newWidget.url);
        this.widgetService.updateWidget(this.widgetId, this.newWidget).subscribe(
            (data: any) => {
                this.errorFlag = false;
                this.newWidget = data;
            }
        );
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onDelete() {
        this.widgetService.deleteWidget(this.widgetId).subscribe(
            (data: any) => {
                this.msg = data;
                this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

            }
        );
    }
}
