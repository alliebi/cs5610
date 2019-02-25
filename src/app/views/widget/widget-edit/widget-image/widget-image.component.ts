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
    uid: string;
    pageId: string;
    newWidget: WidgetImage;
    widget: Widget;
    newWidgetName: string;
    newWidgetWidth = '';
    newWidgetURL = '';

    constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.uid = params['uid'];
                    this.widgetId = params['wgid'];
                    this.pageId = params['pid'];
                }
            );
        if (this.widgetId !== 'undefined') {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
    }

    onUpdateWidget() {
        this.newWidget = new WidgetImage(this.newWidgetName, '', 'IMAGE', '', this.newWidgetWidth, this.newWidgetURL);
        this.widgetService.updateWidget(this.widgetId, this.newWidget);
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onDelete() {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
