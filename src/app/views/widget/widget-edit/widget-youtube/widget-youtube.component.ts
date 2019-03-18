import {Component, OnInit} from '@angular/core';
import {Widget, WidgetYoutube} from '../../../../models/widget.model.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

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
    widget: Widget;
    newWidgetName: string;
    newWidgetText = '';
    newWidgetWidth = '';
    newWidgetURL = '';
    msg: string;

    constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.uid = params['uid'];
                    this.wid = params['wid'];
                    this.widgetId = params['wgid'];
                    this.pageId = params['pid'];
                }
            );
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId).subscribe(
                (data: any) => {
                    this.widget = data;
                }
            );
        }
    }

    onUpdateWidget() {
        this.newWidget = new WidgetYoutube(this.newWidgetName, '', 'YOUTUBE', this.pageId, this.newWidgetWidth, this.newWidgetURL);
        this.widgetService.updateWidget(this.widgetId, this.newWidget).subscribe(
            (data: any) => {
                this.widget = data;
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
