import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetHeading} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-heading.component.html',
  styleUrls: ['./widget-heading.component.css', '../../../../../css/style.css']
})
export class WidgetHeadingComponent implements OnInit {
  widgetId: string;
  userId: string;
  pageId: string;
  widget: Widget = new WidgetHeading('', '', '', null, '');
  newWidget: Widget;
  newWidgetName: string;
  newWidgetText = '';
  newWidgetSize: number = null;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.userId = params['uid'];
              this.widgetId = params['wgid'];
              this.pageId = params['pid'];
            }
        );
    if (this.widgetId !== 'undefined') {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    }
  }

  onEditWidget() {
    if (this.widgetId === 'undefined') {
      this.newWidget = new WidgetHeading('', 'HEADING', this.pageId, this.newWidgetSize, this.newWidgetText);
      this.widgetService.createWidget(this.pageId, this.newWidget);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      if (this.newWidgetText === '') {
        // @ts-ignore
        this.newWidgetText = this.widget.text;
      }
      if (this.newWidgetSize === null) {
        // @ts-ignore
        this.newWidgetSize = this.widget.size;
      }
      // console.log(this.newWidgetText);
      this.newWidget = new WidgetHeading(this.widgetId, 'HEADING', this.pageId, this.newWidgetSize, this.newWidgetText);
      this.widgetService.updateWidget(this.widgetId, this.newWidget);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  onDelete() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
