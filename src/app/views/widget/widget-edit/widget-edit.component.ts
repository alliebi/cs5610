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
    wgid: string;
    widgetService: WidgetService;
    widget: Widget;
    widgets: Widget[] = [];

    constructor(private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                console.log('widget edit params:" ');
                console.log(params);
                this.wgid = params['wgid'];
                this.widgetService = new WidgetService();
                this.widget = this.widgetService.findWidgetById(this.wgid);
                console.log(this.widgets);
            });
    }

}
