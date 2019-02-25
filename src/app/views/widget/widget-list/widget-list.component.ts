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
    widget: Widget;
    widgets: Widget[] = [];


    constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                console.log('widget list params:" ');
                console.log('params:' + params);
                this.uid = params['uid'];
                this.wid = params['wid'];
                this.pid = params['pid'];
                console.log('pid:' + this.pid);
                console.log('wid:' + this.wid);
                console.log('uid:' + this.uid);

                this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
            });
    }

}
