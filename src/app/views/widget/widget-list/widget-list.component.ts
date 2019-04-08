import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
    selector: 'app-widget-list',
    templateUrl: './widget-list.component.html',
    styleUrls: ['./widget-list.component.css', '../../../../css/style.css']
})
export class WidgetListComponent implements OnInit {
    uid: string;
    wid: string;
    pid: string;
    widgets: Widget[];

    constructor(private activateRoute: ActivatedRoute,
                private pageService: PageService,
                private widgetService: WidgetService,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.uid = this.sharedService.user._id;
                this.wid = params['wid'];
                this.pid = params['pid'];
                this.widgetService.findWidgetsByPageId(this.pid).subscribe(
                    (data: any) => {
                        // console.log('pageService findPageById data');
                        // console.log(data);
                        this.widgets = data;
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
