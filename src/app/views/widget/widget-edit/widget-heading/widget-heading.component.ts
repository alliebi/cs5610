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
    uid: string;
    wid: string;
    pageId: string;
    widgetId: string;
    newWidget: WidgetHeading;
    widget: Widget;
    newWidgetName: string;
    newWidgetSize: number;
    newWidgetText: string;
    msg: string;

    constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.uid = params['uid'];
                    this.wid = params['wid'];
                    this.pageId = params['pid'];
                    this.widgetId = params['wgid'];
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
        this.newWidget = new WidgetHeading(this.newWidgetName, '', 'HEADING', '', this.newWidgetSize, this.newWidgetText);
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
