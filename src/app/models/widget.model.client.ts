export interface Widget {
    name: string;
    widgetType: string;
    pageId: string;
    text: string;
    _id?: string;
}

export class WidgetHeading implements Widget {
    name: string;
    pageId: string;
    text: string;
    widgetType: string;
    size: number;


    constructor(name: string, widgetType: string, pageId: string, text: string, size: number) {
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
        this.size = size;
    }
}

export class WidgetImage implements Widget {
    name: string;
    pageId: string;
    text: string;
    widgetType: string;
    width: string;
    url: string;

    constructor(name: string, widgetType: string, pageId: string, text: string, width: string, url: string) {
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
        this.width = width;
        this.url = url;
    }
}

export class WidgetYoutube implements Widget {
    name: string;
    pageId: string;
    text: string;
    widgetType: string;
    width: string;
    url: string;

    constructor(name: string, widgetType: string, pageId: string, text: string, width: string, url: string) {
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
        this.width = width;
        this.url = url;
    }
}

export class WidgetHTML implements Widget {
    name: string;
    pageId: string;
    text: string;
    widgetType: string;
    width: string;
    url: string;

    constructor(name: string, widgetType: string, pageId: string, text: string, width: string, url: string) {
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
        this.width = width;
        this.url = url;
    }
}


export class WidgetTEXT implements Widget {
    name: string;
    pageId: string;
    text: string;
    widgetType: string;
    width: string;
    url: string;
    placeholder: string;
    rows: string;
    formatted: boolean;

    constructor(name: string, widgetType: string, pageId: string, text: string, width: string, url: string) {
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
        this.width = width;
        this.url = url;
    }
}
