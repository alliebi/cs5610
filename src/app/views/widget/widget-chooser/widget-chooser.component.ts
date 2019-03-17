import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
    selector: 'app-widget-chooser',
    templateUrl: './widget-chooser.component.html',
    styleUrls: ['./widget-chooser.component.css', '../../../../css/style.css']
})
export class WidgetChooserComponent implements OnInit {
    pid: string;
    widget: Widget;

    constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
                (params: Params) => {
                    this.pid = params.pid;
                }
            );
        this.widget = {name: '', _id: '', widgetType: '', pageId: this.pid};
        this.widgetService.createWidget(this.pid, this.widget).subscribe(
            (data: any) => {
                this.widget = data;
            }
        );
        console.log('pid: ' + this.pid);
        console.log('on init widget: ' + this.widget._id);

    }

    onSubmit(newWidgetType: string) {
        this.widget.widgetType = newWidgetType;
        console.log('onSubmit widget: ' + this.widget);
    }

}
