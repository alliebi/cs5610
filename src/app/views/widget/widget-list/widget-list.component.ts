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
                this.uid = params['uid'];
                this.wid = params['wid'];
                this.pid = params['pid'];

                this.widgetService.findWidgetsByPageId(this.pid).subscribe(
                    (data: any) => {
                        this.widgets = data;
                        for (const w of this.widgets) {
                        }
                    }
                );
            });
    }

    // receiving the emitted event
    reorderWidgets(indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
            .subscribe(
                (data) => console.log(data)
            );
    }

}
