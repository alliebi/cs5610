import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetHeading} from '../../../../models/widget.model.client';

@Component({
    selector: 'app-widget-heading',
    templateUrl: './widget-heading.component.html',
    styleUrls: ['./widget-heading.component.css', '../../../../../css/style.css']
})
export class WidgetHeadingComponent implements OnInit {
    widgetId: string;
    uid: string;
    pageId: string;
    newWidget: WidgetHeading;
    widget: Widget;
    newWidgetName: string;
    newWidgetSize: number;
    newWidgetText: string;

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
        this.newWidget = new WidgetHeading(this.newWidgetName, '', 'HEADING', '', this.newWidgetSize, this.newWidgetText);
        this.widgetService.updateWidget(this.widgetId, this.newWidget);
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onDelete() {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], {relativeTo: this.route});
    }

}
