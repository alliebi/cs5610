import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetHeading} from '../../../../models/widget.model.client';
import {SharedService} from '../../../../services/shared.service';

// @ts-ignore
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
    msg: string;

    errorFlag: boolean;
    errorMsg = 'Widget name required!';

    constructor(private route: ActivatedRoute,
                private widgetService: WidgetService,
                private router: Router,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.uid = this.sharedService.user._id;
                    this.wid = params['wid'];
                    this.pageId = params['pid'];
                    this.widgetId = params['wgid'];
                }
            );
        if (this.widgetId !== 'undefined') {
            this.widgetService.findWidgetById(this.widgetId).subscribe(
                (data: any) => {
                    this.newWidget = data;
                }
            );
        }
        this.newWidget = new WidgetHeading('', 'HEADING', '', '', null);
    }

    onUpdate() {
        if (!this.newWidget.name) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidget(this.widgetId, this.newWidget).subscribe(
            (data: any) => {
                this.errorFlag = false;
                this.newWidget = data;
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
