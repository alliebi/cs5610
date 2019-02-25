
export class Page {
    _id: string;
    name: string;
    wid: string;
    title: string;

    constructor(_id, name, wid, title) {
        this._id = _id;
        this.name = name;
        this.wid = wid;
        this.title = title;
    }
}
