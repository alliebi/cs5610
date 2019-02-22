import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
    selector: 'app-widget-list',
    templateUrl: './widget-list.component.html',
    styleUrls: ['./widget-list.component.css', '../../../../css/style.css']
})
export class WidgetListComponent implements OnInit {
    uid: string;
    wid: string;
    pid: string;
    widgetService: WidgetService;
    widget: Widget;
    widgets: Widget[] = [];


    constructor(private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                console.log('widget list params:" ');
                console.log(params);
                this.uid = params['uid'];
                this.wid = params['wid'];
                this.pid = params['pid'];
                console.log(this.pid);
                this.widgetService = new WidgetService();
                this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
                console.log(this.widgets);
            });
    }

}
