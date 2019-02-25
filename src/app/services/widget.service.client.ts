import {Widget, WidgetHeading, WidgetHtml, WidgetImage, WidgetYoutube} from '../models/widget.model.client';
import {BehaviorSubject, Subject} from 'rxjs';
import {text} from '@angular/core/src/render3';
import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {

    widgetsChanged = new Subject<Widget[]>();
    private widgetChosen = new BehaviorSubject('DEFAULT');
    widgets: Widget[] = [
        new WidgetHeading('', '123', 'HEADING', '321', 2, 'GIZMODO'),
        new WidgetHeading('', '234', 'HEADING', '432', 4, 'Lorem ipsum'),
        new WidgetImage('', '345', 'IMAGE', '543', '100%', 'http://lorempixel.com/400/200'),
        new WidgetImage('', '456', 'IMAGE', '654', '100%', 'http://lorempixel.com/400/200'),
        new WidgetHeading('', '567', 'HEADING', '765', 4, 'Lorem ipsum'),
        new WidgetYoutube('', '678', 'YOUTUBE', '876', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM'),
        new WidgetYoutube('', '789', 'YOUTUBE', '987', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM')
    ];

    createWidget(pageId: string, widget: Widget) {
        widget._id = String(Math.floor(Math.random() * 1000) + 1);
        widget.pageId = pageId;
        this.widgets.push(widget);
    }

    findWidgetsByPageId(pageId: string) {
        const ans = [];
        for (const widget of this.widgets) {
            if (widget.pageId === pageId) {
                ans.push(widget);
            }
        }
        return ans;
    }

    findWidgetById(widgetId: string) {
        for (const widget of this.widgets) {
            if (widget._id === widgetId) {
                return widget;
            }
        }
    }

    updateWidget(widgetId: string, newWidget: any) {
        for (const widget of this.widgets) {
            if (widget._id === widgetId) {
                if (widget.widgetType === 'HEADING') {
                    // @ts-ignore
                    widget.size = newWidget.size;
                    // @ts-ignore
                    widget.text = newWidget.text;
                } else if (widget.widgetType === 'IMAGE') {
                    // @ts-ignore
                    widget.width = newWidget.width;
                    // @ts-ignore
                    widget.url = newWidget.url;
                } else if (widget.widgetType === 'YOUTUBE') {
                    // @ts-ignore
                    widget.width = newWidget.width;
                    // @ts-ignore
                    widget.url = newWidget.url;
                }
            }
        }
        this.widgetsChanged.next(this.widgets.slice());
    }

    deleteWidget(widgetId: string) {
        this.widgets.forEach((widget, index) => {
            if (widget._id === widgetId) {
                this.widgets.splice(index, 1);
            }
        });
    }
}


// import {Injectable} from '@angular/core';
// import {Widget} from '../models/widget.model.client';
//
// @Injectable()
// export class WidgetService {
//
//     // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
//     widgets: Widget[] = [
//         new Widget('123', 'HEADING', '321', '2', 'GIZMODO', null, null),
//         new Widget('234', 'HEADING', '432', '4', 'Lorem ipsum', null, null),
//         new Widget('345', 'IMAGE', '543', null, null, '100%', 'http://lorempixel.com/400/200/'),
//         new Widget('456', 'HTML', '321', null, '<p>Lorem ipsum</p>', null, null),
//         new Widget('567', 'HEADING', '432', '4', 'Lorem ipsum', null, null),
//         new Widget('678', 'YOUTUBE', '543', null, null, '100%', 'https://youtube.com/token'),
//         new Widget('789', 'HTML', '321', '<p>Lorem ipsum</p>', null, null)
//    ];
//
//
//     createWidget(pageId, widget) {
//         this.widgets.push(widget);
//     }
//
//     updateWidget(widgetId, widget) {
//         for (const i in this.widgets) {
//             if (this.widgets[i]._id === widgetId) {
//                 switch (widget.widgetType) {
//                     case 'HEADER':
//                         this.widgets[i].text = widget.text;
//                         this.widgets[i].size = widget.size;
//                         return true;
//
//                     case 'IMAGE':
//                         this.widgets[i].text = widget.text;
//                         this.widgets[i].url = widget.url;
//                         this.widgets[i].width = widget.width;
//                         return true;
//
//                     case 'YOUTUBE':
//                         this.widgets[i].text = widget.text;
//                         this.widgets[i].url = widget.url;
//                         this.widgets[i].width = widget.width;
//                         return true;
//                 }
//
//             }
//         }
//         return false;
//     }
//
//     findWidgetsByPageId(pageId) {
//         const resultSet = [];
//         for ( const i in this.widgets) {
//             if (this.widgets[i].pageId === pageId) {
//                 resultSet.push(this.widgets[i]);
//             }
//         }
//         return resultSet;
//     }
//
//     findWidgetById(widgetId: String) {
//         return this.widgets.find(function (widget) {
//             return widget._id === widgetId;
//         });
//     }
//
//     deleteWidget(widgetId){
//         for (const i in this.widgets) {
//             if (this.widgets[i]._id === widgetId) {
//                 const j = +i;
//                 this.widgets.splice(j, 1);
//             }
//         }
//     }
//
// }
