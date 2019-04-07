import {Component, OnInit} from '@angular/core';
import {Widget, WidgetYoutube} from '../../../../models/widget.model.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service';

@Component({
    selector: 'app-widget-youtube',
    templateUrl: './widget-youtube.component.html',
    styleUrls: ['./widget-youtube.component.css', '../../../../../css/style.css']
})
export class WidgetYoutubeComponent implements OnInit {
    widgetId: string;
    uid: string;
    wid: string;
    pageId: string;
    newWidget: WidgetYoutube;
    newWidgetName: string;
    newWidgetWidth = '';
    newWidgetURL = '';
    msg: string;

    errorFlag: boolean;
    errorMsg = 'Widget name required!';

    constructor(private route: ActivatedRoute,
                private widgetService: WidgetService,
                private router: Router,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.uid = this.sharedService.user._id;
                    this.wid = params['wid'];
                    this.widgetId = params['wgid'];
                    this.pageId = params['pid'];
                }
            );
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId).subscribe(
                (data: any) => {
                    this.newWidget = data;
                }
            );
        }
        this.newWidget = new WidgetYoutube(this.newWidgetName,  'YOUTUBE', this.pageId, '', this.newWidgetWidth, this.newWidgetURL);
    }

    onUpdateWidget() {
        if (!this.newWidget.name) {
            this.errorFlag = true;
            return;
        }
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
            }
        );
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pageId, 'widget']);
    }
}
