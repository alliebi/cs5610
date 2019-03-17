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
                console.log('widget-list component ts pid:' + this.pid);
                console.log('widget-list component ts wid:' + this.wid);
                console.log('widget-list component ts uid:' + this.uid);
                console.log('widget-list component ts onInit');

                this.widgetService.findWidgetsByPageId(this.pid).subscribe(
                    (data: any) => {
                        this.widgets = data;
                        for (const w of this.widgets) {
                            console.log('widget-list component ts: widgets');
                            console.log(w._id);

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
