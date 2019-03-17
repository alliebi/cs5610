import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-widget-edit',
    templateUrl: './widget-edit.component.html',
    styleUrls: ['./widget-edit.component.css', '../../../../css/style.css']
})
export class WidgetEditComponent implements OnInit {
    uid: string;
    wid: string;
    pid: string;
    wgid: string;
    widget: Widget;
    widgets: Widget[] = [];

    constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = params['uid'];
                this.wid = params['wid'];
                this.pid = params['pid'];
                this.wgid = params['wgid'];
            });

        this.widgetService.findWidgetById(this.wgid).subscribe(
            (data: any) => {
                console.log(data);
                this.widget = data;
            }
        );
    }

}
