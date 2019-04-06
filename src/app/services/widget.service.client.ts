import {Widget, WidgetHeading, WidgetImage, WidgetYoutube} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {
    constructor(private http: HttpClient) {
    }

    base_url = environment.baseUrl;

    createWidget(pageId: string, widget) {
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
