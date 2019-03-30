import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';

// @ts-ignore
@Component({
    selector: 'app-widget-chooser',
    templateUrl: './widget-chooser.component.html',
    styleUrls: ['./widget-chooser.component.css', '../../../../css/style.css']
})
export class WidgetChooserComponent implements OnInit {
    uid: string;
    wid: string;
    pid: string;
    wgid: string;
    widget = {name: '', widgetType: '', pageId: ''};

    constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(
                (params: Params) => {
                    this.uid = params.uid;
                    this.wid = params.wid;
                    this.pid = params.pid;
                    this.wgid = params.wgid;
                    this.widget = {name: '', widgetType: '', pageId: this.pid};
                }
            );
    }

    onSubmit(newWidgetType: string) {
        console.log(newWidgetType);

        this.widget.widgetType = newWidgetType;
        this.widgetService.createWidget(this.pid, this.widget).subscribe(
            (data: any) => {
                this.widget = data;
                console.log(data);
                this.router.navigate(['user/', this.uid, 'website', this.wid, 'page', this.pid, 'widget', data._id]);
            }
        );
        // switch (this.widget.widgetType) {
        //     case 'HEADING':
        //         // code block
        //         break;
        //     case 'IMAGE':
        //         // code block
        //         break;
        //     default:
        //     // code block
        // }
    }

}
