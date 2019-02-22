import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetImage} from '../../../../models/widget.model.client';

@Component({
    selector: 'app-widget-image',
    templateUrl: './widget-image.component.html',
    styleUrls: ['./widget-image.component.css', '../../../../../css/style.css']
})
export class WidgetImageComponent implements OnInit {
    widgetId: string;
    userId: string;
    pageId: string;
    widget: Widget = new WidgetImage('', '', '', '', '');
    newWidget: Widget;
    newWidgetName: string;
    newWidgetText = '';
    newWidgetWidth = '';
    newWidgetURL = '';

    constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.userId = params['uid'];
                    this.widgetId = params['wgid'];
                    this.pageId = params['pid'];
                }
            );
        if (this.widgetId !== 'undefined') {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
    }

    onEditWidget() {
        if (this.widgetId === 'undefined') {
            this.newWidget = new WidgetImage('', 'IMAGE', this.pageId, this.newWidgetWidth, this.newWidgetURL);
            this.widgetService.createWidget(this.pageId, this.newWidget);
            this.router.navigate(['../'], {relativeTo: this.route});
        } else {
            if (this.newWidgetText === '') {
                // @ts-ignore
                this.newWidgetText = this.widget.text;
            }
            if (this.newWidgetWidth === '') {
                // @ts-ignore
                this.newWidgetWidth = this.widget.width;
            }
            if (this.newWidgetURL === '') {
                // @ts-ignore
                this.newWidgetURL = this.widget.url;
            }
            this.newWidget = new WidgetImage(this.widgetId, 'IMAGE', this.pageId, this.newWidgetWidth, this.newWidgetURL);
            this.widgetService.updateWidget(this.widgetId, this.newWidget);
            this.router.navigate(['../'], {relativeTo: this.route});
        }
    }

    onDelete() {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
