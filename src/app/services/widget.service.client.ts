import {Widget, WidgetHeading, WidgetHtml, WidgetImage, WidgetYoutube} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class WidgetService {
    constructor(private http: HttpClient) {
    }

    base_url = 'http://localhost:3200/';
    // widgets: Widget[] = [
    //     new WidgetHeading('', '123', 'HEADING', '321', 2, 'GIZMODO'),
    //     new WidgetHeading('', '234', 'HEADING', '432', 4, 'Lorem ipsum'),
    //     new WidgetImage('', '345', 'IMAGE', '543', '100%', 'http://lorempixel.com/400/200'),
    //     new WidgetImage('', '456', 'IMAGE', '654', '100%', 'http://lorempixel.com/400/200'),
    //     new WidgetHeading('', '567', 'HEADING', '765', 4, 'Lorem ipsum'),
    //     new WidgetYoutube('', '678', 'YOUTUBE', '876', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM'),
    //     new WidgetYoutube('', '789', 'YOUTUBE', '987', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM')
    // ];

    createWidget(pageId: string, widget: Widget) {
        const url = this.base_url + 'api/page/' + pageId + '/widget';
        return this.http.post(url, widget);
    }

    findWidgetsByPageId(pageId: string) {
        const url = this.base_url + 'api/page/' + pageId + '/widget';
        return this.http.get(url);
    }

    findWidgetById(widgetId: string) {
        const url = this.base_url + 'api/widget/' + widgetId;
        return this.http.get(url);
    }

    updateWidget(widgetId: string, newWidget: any) {
        const url = this.base_url + 'api/widget/' + widgetId;
        return this.http.put(url, newWidget);
    }

    deleteWidget(widgetId: string) {
        const url = this.base_url + 'api/widget/' + widgetId;
        return this.http.delete(url);
    }

    reorderWidgets(startIndex, endIndex, pageId) {

        const url = this.base_url + 'api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
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
